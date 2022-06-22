import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert';

export const Warning = ({
	title='Warning: Default',
}) => {
	const videoConfig = useVideoConfig()
	const aR = useConvert.aspectRatio()
	const fudgeMax = (aR > 1)
		? null
		: videoConfig.height + videoConfig.height*(aR-0.5)*0.4
	const fontSize = useConvert.vmax(5.05, fudgeMax);
	const margin = useConvert.vmax(0.505, fudgeMax)

	const frame = useCurrentFrame()
	return (
		<h1
			style={{
				color: 'linen',
				backgroundColor: '#a00',
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: fontSize,
				margin: margin,
				textAlign: 'center',
			}}
		>
			{title}
		</h1>
	);
};
