import * as settings from "./settings"
import { MODE } from '../../CONFIG'

const FPS = settings.presets[MODE].fps // avoid useVideoConfig().fps
const DIVFPS = 1 / FPS // multiply is cheaper than division

export function prep(transcript) {
	// need to clone; input get muatated
	let tr = JSON.parse(JSON.stringify(transcript));  //OPTIMIZE; shallow, or fast-json0stringify?
	//ASSUMPTION: time is seconds-only like VTT
	let endSecond = 0.0 // time index for last marker
	let offsetFrame = 0.0  // acculmilates rounding diff
	let vtt = `WebVTT - generated using TomByrer's prep-transcript
`;
	for (let i = 0, len = tr.length; i < tr.length; i++) {
		let seq = tr[i] // SEQuence

		/* Calculate times */
		//TODO possible fremes-only source
		const startSecond = seq.timeSrtSec ?? endSecond
		seq.timeSrtSec = startSecond
		const startFloatFrame = startSecond * FPS
		seq.timeSrtFrame = Math.round(startFloatFrame + offsetFrame)
		offsetFrame += startFloatFrame - seq.timeSrtFrame

		//OOO optimizaton; hopefully exists if end doesn't endSecond - startSecond
		if (seq.timeEndSec){ // end marker >importance duration
			seq.timeDurSecs = seq.timeEndSec - startSecond
		}else if (seq.timeDurSecs) {
			seq.timeEndSec = startSecond + seq.timeDurSecs
		} else { // only start markers
			seq.timeEndSec = tr[i+1].timeSrtSec
			seq.timeDurSecs = seq.timeEndSec - startSecond
		}
		endSecond = seq.timeEndSec
		const endFloatFrame = seq.timeEndSec * FPS
		seq.timeEndFrame = Math.round(endFloatFrame + offsetFrame)
		offsetFrame += endFloatFrame - seq.timeEndFrame

		seq.timeDurFrames = seq.timeEndFrame - seq.timeSrtFrame + 1

		/* WebVTT */
		seq.title ||= "Sequence "+ i
		vtt += `
${new Date(startSecond*1000).toISOString().slice(11,23)} --> ${new Date(endSecond*1000).toISOString().slice(11,23)}
- ${seq.title}
`
		vtt += (seq.subtitle) ? `- ${seq.subtitle}
` : ''

		tr[i] = seq
	}

	// console.log('VTT', vtt);
	return {tr, vtt, }
}
