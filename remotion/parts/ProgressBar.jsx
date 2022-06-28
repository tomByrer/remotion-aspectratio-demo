import * as useConvert from '../helpers/useConvert'

/* csscodelab.com/custom-react-js-progress-bar/ */
export const ProgressBar = ({
	colorBackDone='black',
	colorFrontDone='white',
}) => {
	const fontSize = useConvert.sizeFontSmall(69)
	// book "Small Big": studies show people are motivated by progress half way, then % to compleation after half
	let donePercent = useConvert.framesDonePercent() //WA assignment prevents crash after 50%
	let isNumberRight = donePercent > 50
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
			{(!isNumberRight)
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
				background: colorBackDone,
				borderRadius: fontSize,
				height: "100%",
				width: `${donePercent}%`,
				color: colorFrontDone,
				opacity: 1,
				fontSize: `${fontSize}px`,
			}}>
				{(isNumberRight)
					? <div style={{margin:`0 ${fontSize*.8}px 0 0`}}>{doneFixed +'%'}</div>
					: null
				}
			</div>
		</div>
	)
};