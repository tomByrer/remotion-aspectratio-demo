import { useCurrentFrame, useVideoConfig, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'

// import {SimpleCenteredCode} from '../segments/SimpleCenteredCode'
import {TwoCenteredCode} from '../segments/TwoCenteredCode'
import {IntroCode} from '../segments/IntroCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'
import { ProgressBar } from 	'../parts/ProgressBar'

export function ArrangeSeries({transcript, }) {
	return (<>
		{transcript.map( function(aspects, i){
			const key = i + aspects.layout
			switch(aspects.layout){
				case 'IntroCode':
					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<IntroCode aspects={aspects}/>
						</Sequence>
					)
					break;

				case 'ThreeRowsImgTitleSub':
					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<ThreeRowsImgTitleSub aspects={aspects} />
						</Sequence>
					)
					break;

				case 'FrameCount':
					const FADED_TEXT = 0.382
					function formatNumberLeading(number=1, intergerDigits=3, fractionDigits=0, placeholder='0'){
						let num = number.toFixed(fractionDigits)
						// const numIntLen = number.toFixed().length  bug:loses if rounding up
						const numIntLen = String(num | 0).length
						return <><span style={{opacity:FADED_TEXT}}>{placeholder.repeat(intergerDigits - numIntLen)}</span>{num}</>
					}

					// aspects.rowTop = `w:${useVideoConfig().width} h:${useVideoConfig().height} fps:${useVideoConfig().fps}`
					aspects.rowTop = <span style={{opacity:FADED_TEXT}}>w:{useVideoConfig().width} h:{useVideoConfig().height} fps:{useVideoConfig().fps}</span>

					//MUST obtain frame count at top-level, before Sequence
					// 1-index since humans start counting at one ;)
					const FRAME_DIGITS = String( useVideoConfig().durationInFrames ).length
					const SEC_DIGITS = String( useConvert.frames2seconds( useVideoConfig().durationInFrames) ).length
					// console.log('fc', FRAME_DIGITS)
					// aspects.codeLeft = Number( useCurrentFrame() +1 ).toFixed().padStart(FRAME_DIGITS , '_' )
					aspects.codeLeft = formatNumberLeading( useCurrentFrame() +1, FRAME_DIGITS, 0, '_' )
					const ROUNDOFF = 2
					// aspects.codeRight = useConvert.frames2seconds(useCurrentFrame(), +1).toFixed(ROUNDOFF).padStart(SEC_DIGITS + 3,'_')
					aspects.codeRight = formatNumberLeading( useConvert.frames2seconds(useCurrentFrame(),+1), SEC_DIGITS, ROUNDOFF, '_' )
					// aspects.textLeft = `frames of `+ useVideoConfig().durationInFrames
					aspects.textLeft = <span style={{opacity:FADED_TEXT}}>frames of {useVideoConfig().durationInFrames}</span>
					// aspects.textRight = `seconds of `+ useConvert.frames2seconds( useVideoConfig().durationInFrames)
					// aspects.textRight = `seconds of `+ useConvert.frames2seconds( useVideoConfig().durationInFrames)
					aspects.textRight = <span style={{opacity:FADED_TEXT}}>seconds of {useConvert.frames2seconds( useVideoConfig().durationInFrames)}</span>

					aspects.rowBottom = <ProgressBar colorBackDone={aspects.colorFront} />

					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<TwoCenteredCode aspects={aspects} />
						</Sequence>
					)
					break;

				default:
					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<div>
								default: frames {aspects.timeSrtFrame} to {aspects.timeSrtFrame + aspects.timeDurFrames}
							</div>
						</Sequence>
					)
			}
		})}
	</>)
}
