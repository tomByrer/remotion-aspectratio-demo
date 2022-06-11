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
						let doneFraction =  (useCurrentFrame() +1) / useVideoConfig().durationInFrames
						const fontSize = useConvert.sizeFontSmall(69)
						const widthBar = fontSize / useConvert.vw(97)
						let isEnoughTextRoom = widthBar / doneFraction < .29
						// let isEnoughTextRoom = doneFraction > .5
						console.log('PB', doneFraction, useConvert.vw(), widthBar, fontSize, widthBar / doneFraction)


						let donePercent = doneFraction * 100
						let doneFixed = donePercent.toFixed()

						return (
							<div class="progress" style={{
								backgroundColor: "#d8d8d89f",
								borderRadius: fontSize,
								position: "relative",
								margin: "15 0",
								height: useConvert.sizeFontSmall(88),
								width: useConvert.vw(97),
							}}>
								{(!isEnoughTextRoom)
									? <div class="progress-right" style={{
											position:'fixed',
											margin:`-${fontSize*0.09}px 0 0 ${donePercent+1}%`,
											fontSize:`${fontSize}px`,
										}}>
											{doneFixed +'%'}
										</div>
									: null
								}
								<div class="progress-donePercent" style={{
									display: "flex",
									alignItems: "end",
									justifyContent: "end",
									background: aspects.colorFront,
									borderRadius: fontSize,
									height: "100%",
									width: `${donePercent}%`,
									color: "#fff",
									opacity: 1,
									fontSize: `${fontSize}px`,
							}}>
									{(isEnoughTextRoom) ? <div style={{margin:`0 ${fontSize*.8}px 0 0`}}>{doneFixed +'%'}</div> : null}
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
