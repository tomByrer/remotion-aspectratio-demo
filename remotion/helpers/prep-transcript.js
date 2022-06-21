import * as settings from "./settings"
// import { MODE } from '../../CONFIG'

export function prep(transcript) {
	const FPS = settings.presets[transcript.config.preset].fps // avoid useVideoConfig().fps
	// const DIVFPS = 1 / FPS // multiply is cheaper than division

	// need to clone; input get muatated
	let sequence = JSON.parse(JSON.stringify(transcript.sequence));  //OPTIMIZE; https://www.measurethat.net/Benchmarks/Show/17150/0/lodash-clonedeep-vs-structuredclone-vs-recursivedeepcop#latest_results_block

	//ASSUMPTION: time is seconds-only like VTT
	let endSecond = 0.0 // time index for last marker
	let offsetFrame = 0.0  // acculmilates rounding diff, so end is not short
	let vtt = `WebVTT - generated using TomByrer's prep-transcript
`;
	for (let i = 0, len = sequence.length; i < sequence.length; i++) {
		let seg = sequence[i] // Segment

		/* Calculate times */
		//TODO possible fremes-only source
		const startSecond = seg.timeSrtSec ?? endSecond
		seg.timeSrtSec = startSecond
		const startFloatFrame = startSecond * FPS
		seg.timeSrtFrame = Math.round(startFloatFrame + offsetFrame)
		offsetFrame += startFloatFrame - seg.timeSrtFrame

		//OOO optimizaton; hopefully exists if end doesn't endSecond - startSecond
		if (seg.timeEndSec){ // end marker >importance than duration
			seg.timeDurSecs = seg.timeEndSec - startSecond
		}else if (seg.timeDurSecs) {
			seg.timeEndSec = startSecond + seg.timeDurSecs
		} else { // only start markers
			seg.timeEndSec = sequence[i+1].timeSrtSec
			seg.timeDurSecs = seg.timeEndSec - startSecond
		}
		endSecond = seg.timeEndSec
		const endFloatFrame = seg.timeEndSec * FPS
		seg.timeEndFrame = Math.round(endFloatFrame + offsetFrame)
		offsetFrame += endFloatFrame - seg.timeEndFrame

		seg.timeDurFrames = seg.timeEndFrame - seg.timeSrtFrame + 1

		/* WebVTT */
		seg.title ||= "Segment "+ i
		vtt += `
${new Date(startSecond*1000).toISOString().slice(11,23)} --> ${new Date(endSecond*1000).toISOString().slice(11,23)}
- ${seg.title}
`
		vtt += (seg.subtitle) ? `- ${seg.subtitle}
` : ''

		sequence[i] = seg
	}

	// console.log('VTT', vtt);
	return {sequence, vtt, }
}
