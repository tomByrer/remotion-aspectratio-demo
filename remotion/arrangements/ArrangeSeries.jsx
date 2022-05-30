import { Sequence, Series } from "remotion"
import * as useConvert from '../helpers/useConvert'
import { prep } from '../helpers/prep-transcript'

import {IntroCode} from '../segments/IntroCode'
import {ThreeRowsImgTitleSub} from '../segments/ThreeRowsImgTitleSub'

export function ArrangeSeries({transcript, playerConfigStr}) {

	return (<>
		{transcript.map( function(aspects, i){
			const durFrames = useConvert.seconds(aspects.timeDurSecs)
			const key = i + aspects.layout
			if(aspects.layout==='IntroCode'){
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
			} else if(aspects.layout==='ThreeRowsImgTitleSub'){
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
			}//endif
		})}
	</>)
}
