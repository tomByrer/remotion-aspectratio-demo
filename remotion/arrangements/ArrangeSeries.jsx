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
					aspects.rowTop = `w:${useVideoConfig().width} h:${useVideoConfig().height} fps:${useVideoConfig().fps}`

					//MUST obtain frame count at top-level, before Sequence
					// 1-index since humans start counting at one ;)
					const FRAME_DIGITS = String( useVideoConfig().durationInFrames ).length
					const SEC_DIGITS = String( useConvert.frames2seconds( useVideoConfig().durationInFrames) ).length
					// console.log('fc', FRAME_DIGITS)
					aspects.codeLeft = Number( useCurrentFrame() +1 ).toFixed().padStart(FRAME_DIGITS , '_' )
					const ROUNDOFF = 2
					aspects.codeRight = useConvert.frames2seconds(useCurrentFrame(), +1).toFixed(ROUNDOFF).padStart(SEC_DIGITS + 3,'_')
					aspects.textLeft = `frames of `+ useVideoConfig().durationInFrames
					aspects.textRight = `seconds of `+ useConvert.frames2seconds( useVideoConfig().durationInFrames)


					/* ProgressBar  csscodelab.com/custom-react-js-progress-bar/ */
					const Progress = ({}) => {

					let done =  (useCurrentFrame() +1) /  useVideoConfig().durationInFrames
					const fontSize = useConvert.sizeFontSmall(69)
					let widthBar = useConvert.vw(97) * done
					done = done * 100
					let doneFixed = done.toFixed()
					console.log('PB', done, useConvert.vw(), widthBar, fontSize, fontSize/widthBar)
					let isEnoughTextRoom = (doneFixed.length > 1) ? fontSize/widthBar < .43 :fontSize/widthBar < .52
						return (
							<div class="progress" style={{
								backgroundColor: "#d8d8d8aa",
								borderRadius: 16,
								position: "relative",
								margin: "15 0",
								height: useConvert.sizeFontSmall(88),
								width: useConvert.vw(97),
							}}>
								{(!isEnoughTextRoom) ? <div style={{position:'fixed',margin:`${fontSize*0.05}px 0 auto ${done+1}%`,fontSize:`${fontSize}px`,lineHeight:`${fontSize+(fontSize*0.05)}px`,}}>{doneFixed +'%'}</div> : null}
								<div class="progress-done" style={{
									display: "flex",
									alignItems: "end",
									justifyContent: "end",
									background: aspects.colorFront,
									boxShadow: "0 3 3 -5 #F2909C, 0 2 5 #F2909C",
									borderRadius: 16,
									height: "100%",
									width: `${done}%`,
									color: "#fff",
									opacity: 1,
									transition: "2s ease",
									fontSize: `${fontSize}px`,
							}}>
									{(isEnoughTextRoom) ? <div style={{margin:'0 9px 0 0'}}>{doneFixed +'%'}</div> : null}
								</div>
							</div>
						)
					};
					aspects.rowBottom = <Progress />

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
