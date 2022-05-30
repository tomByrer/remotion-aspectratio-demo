import { useCurrentFrame, Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'
import { prep } from '../helpers/prep-transcript'

import {SimpleText} from '../segments/SimpleText'
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
							<ThreeRowsImgTitleSub
								durationInSeconds={aspects.timeDurSecs}
								aspects={aspects}
							/>
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
							<SimpleText
								titleText={String(useCurrentFrame()).padStart(7,'_')}
								aspects={aspects}
							/>
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
							<div>default from {aspects.timeSrtFrame} to {aspects.timeDurFrames}</div>
						</Sequence>
					)
			}
		})}
	</>)
}
