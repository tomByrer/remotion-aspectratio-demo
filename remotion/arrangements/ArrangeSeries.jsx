import { useCurrentFrame, useVideoConfig, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'

// import {SimpleCenteredCode} from '../segments/SimpleCenteredCode'
import {TwoCenteredCode} from '../segments/TwoCenteredCode'
import {IntroCode} from '../segments/IntroCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'

export function ArrangeSeries({transcript, }) {
	const globalFrame = useCurrentFrame()

	return (<>
		{transcript.map( function(aspects, i){
			// const durFrames = useConvert.seconds2frames(aspects.timeDurSecs)
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
					aspects.textTop = `w:${useVideoConfig().width} h:${useVideoConfig().height} fps:${useVideoConfig().fps}`

					//MUST obtain frame count at top-level, before Sequence
					// 1-index since humans start counting at one ;)
					const FRAME_DIGITS = String( useVideoConfig().durationInFrames ).length
					const SEC_DIGITS = String( useConvert.frames2seconds( useVideoConfig().durationInFrames) ).length
					console.log('fc', FRAME_DIGITS)
					aspects.codeLeft = Number( useCurrentFrame() +1 ).toFixed().padStart(FRAME_DIGITS , '_' )
					const ROUNDOFF = 2
					aspects.codeRight = useConvert.frames2seconds(useCurrentFrame(), +1).toFixed(ROUNDOFF).padStart(SEC_DIGITS + 3,'_')
					aspects.textLeft = `frames of `+ useVideoConfig().durationInFrames
					aspects.textRight = `seconds of `+ useConvert.frames2seconds( useVideoConfig().durationInFrames)

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
