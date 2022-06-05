import { useCurrentFrame, useVideoConfig, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'
import { prep } from '../helpers/prep-transcript'

// import {SimpleCenteredCode} from '../segments/SimpleCenteredCode'
import {TwoCenteredCode} from '../segments/TwoCenteredCode'
import {IntroCode} from '../segments/IntroCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'

export function ArrangeSeries({transcript, playerConfigStr}) {
	const globalFrame = useCurrentFrame()

	return (<>
		{transcript.map( function(aspects, i){
			// const durFrames = useConvert.seconds2frames(aspects.timeDurSecs)
			const key = i + aspects.layout
			switch(aspects.layout){
				case 'IntroCode':
					aspects.title = aspects.title.replace(/{{playerConfigStr}}/, playerConfigStr)
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
					//MUST obtain frame count at top-level, before Sequence
					aspects.codeLeft = useCurrentFrame().toFixed().padStart(aspects.digitCount,'_')
					const ROUNDOFF = 2
					aspects.codeRight = useConvert.frames2seconds(useCurrentFrame()).toFixed(ROUNDOFF).padStart(aspects.digitCount + ROUNDOFF,'_')
					aspects.textLeft = `frames of `+ useVideoConfig().durationInFrames
					aspects.textRight = `seconds of `+ useConvert.frames2seconds( useVideoConfig().durationInFrames )

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
