import * as useConvert from '../helpers/useConvert';
import * as useAnimation from '../actions/useAnimation';

export function Subtitle({
	displayText='subtitle text',
	style={color: 'teal'},
}) {
	const fudgeMax = (useConvert.aspectRatio() < 0) ? null : 700
	const fontSize = useConvert.vmax(3.7234, fudgeMax)
	return (
		<h2
			style={{
				...style,
				fontFamily: 'Helvetica, Arial',
				fontSize: fontSize,
				fontWeight: 'lighter',
				textAlign: 'center',
				opacity: useAnimation.fadeIn(0.618),
			}}
		>
			{displayText}
		</h2>
	)
}
