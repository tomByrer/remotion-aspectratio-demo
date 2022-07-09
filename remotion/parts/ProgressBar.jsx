import * as useConvert from '../helpers/useConvert'

/* csscodelab.com/custom-react-js-progress-bar/ */
//TODO have doneFixed in zindex 2 overlayering (vs inside) bar
export const ProgressBar = ({
	colorBackDone='black',
	colorFrontDone='white',
}) => {
	const fontSize = useConvert.sizeFontSmall(69)
	const toptweak = `${fontSize*0.095}px` //TODO perfect responsive
	// book "Small Big": studies show people are motivated by progress half way, then % to compleation after half
	let donePercent = useConvert.framesDonePercent() //WA assignment prevents crash after 50%
	let isNumberRight = donePercent > 50
	let doneFixed = donePercent.toFixed() //TODO float; see above

	return (
		<div class="progress" style={{
			backgroundColor: "#d8d8d89f",
			borderRadius: fontSize,
			position: "relative",
			margin: "15 0",
			height: useConvert.sizeFontSmall(88),
			width: useConvert.vw(97),
			fontFamily: 'Hamlet',
			lineHeight: `${fontSize}px`,
			fontSize: `${fontSize}px`,
		}}>
			{(!isNumberRight)
				? <div class="progress-right" style={{
						position:'fixed',
						margin:`${toptweak} 0 0 ${donePercent+1}%`,
						lineHeight: `${fontSize}px`,
						fontSize:`${fontSize}px`,
					}}>
						<code>{doneFixed +'%'}</code>
					</div>
				: null
			}
			<div class="progress-donePercent" style={{
				display: "flex",
				// alignItems: "end",
				justifyContent: "end",
				background: colorBackDone,
				borderRadius: fontSize,
				height: "100%",
				width: `${donePercent}%`,
				color: colorFrontDone,
				opacity: 1,
				lineHeight: `${fontSize}px`,
				// fontSize: `${fontSize}px`,
			}}>
				{(isNumberRight)
					? <div style={{lineHeight: `${fontSize}px`,margin:`${toptweak} ${fontSize*.8}px 0 0`}}><code>{doneFixed +'%'}</code></div>
					: null
				}
			</div>
		</div>
	)
};