import { useCurrentFrame, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'
import { prep } from '../helpers/prep-transcript'

import {SimpleGridText} from '../segments/SimpleGridText'
import {IntroCode} from '../segments/IntroCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'

export function ArrangeSeries({transcript, playerConfigStr}) {
	const globalFrame = useCurrentFrame()

	return (<>
		{transcript.map( function(aspects, i){
			// const durFrames = useConvert.seconds(aspects.timeDurSecs)
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
					aspects.title = String(useCurrentFrame()).padStart(aspects.digitCount,'_')

					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<SimpleGridText aspects={aspects} />
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
