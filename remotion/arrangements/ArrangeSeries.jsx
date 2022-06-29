import { useCurrentFrame, useVideoConfig, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'

import {FrameCount} from '../segments/FrameCount'
import {IntroCode} from '../segments/IntroCode'
// import {SimpleCenteredCode} from '../segments/SimpleCenteredCode'
// import {TwoCenteredCode} from '../segments/TwoCenteredCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'

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
					return(
						<Sequence
							from={aspects.timeSrtFrame}
							durationInFrames={aspects.timeDurFrames}
							key={key}
						>
							<FrameCount aspects={aspects} />
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
