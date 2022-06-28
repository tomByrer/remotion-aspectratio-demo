import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert';

export const TitleOutlined = ({
	aspects={
		title:'default title text',
		style:{color: 'darkgray'},
	}
}) => {
	const text = aspects.title.split(' ').map(function (t) {
			return ` ${t} `
		})

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
				backgroundColor: 'yellow',
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: fontSize,
				textAlign: 'center',
				...aspects.style,
			}}
		>
			{text.map(function (t, i) {
					return (
						<span
							key={t}
							style={{
								marginRight: margin,
								marginLeft: margin,
								transform: `scale(${spring({
									fps: videoConfig.fps,
									frame: frame - i * useConvert.seconds2frames(0.1618),
									config: {
										damping: 100,
										stiffness: 200,
										mass: 0.5,
									},
								})})`,
								display: 'inline-block',
							}}
						>
							{t}
						</span>
					)
				})}
		</h1>
	);
};
