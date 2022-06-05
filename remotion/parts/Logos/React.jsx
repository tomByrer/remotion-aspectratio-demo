import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../../helpers/useConvert';
import {COLOR_1, COLOR_2} from '../../helpers/settings';

export function LogoReact({
	use='logo', // or transition
}) {
	const videoConfig = useVideoConfig()
	// when size = 540, fits a 360 perfectly
// 	const fitD = Math.min(videoConfig.width, videoConfig.height)
	const fitDimention = Math.min(videoConfig.height, videoConfig.width)
	const fitHalf = fitDimention * 0.5
	const frame = useCurrentFrame()

	const development = spring({
		config: {
			damping: 100,
			mass: 1.618,
		},
		fps: videoConfig.fps,
		frame,
	})

	function Arc({ rotation }) {
		const rx = fitDimention * 0.125
		const ry = rx * 2.2
		const arcLength = Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) * 0.5)
		const strokeWidth = arcLength * 0.01666

		return (
			<svg
				viewBox={`0 0 ${fitDimention} ${fitDimention}`}
				style={{
					position: 'absolute',
					transform: `rotate(${rotation * development}deg)`,
				}}
			>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor={COLOR_1} />
						<stop offset="100%" stopColor={COLOR_2} />
					</linearGradient>
				</defs>
				<ellipse
					cx={fitHalf}
					cy={fitHalf}
					rx={rx}
					ry={ry}
					fill="none"
					stroke="url(#gradient)"
					strokeDasharray={arcLength}
					strokeDashoffset={arcLength - arcLength * development}
					strokeLinecap="round"
					strokeWidth={strokeWidth} />
			</svg>
		)
	}

	function Atom(){
		const radius = useConvert.vmin(7.20255)
		return (
			<svg
				viewBox={`0 0 ${fitDimention} ${fitDimention}`}
				style={{
					position: 'absolute',
					transform: `scale(${development})`,
				}}
			>
				<defs>
					<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor={COLOR_1} />
						<stop offset="100%" stopColor={COLOR_2} />
					</linearGradient>
				</defs>
				<circle
					r={radius} // 540/100*7.20255
					cx={fitHalf}
					cy={fitHalf}
					fill="url(#gradient2)" />
			</svg>
		)
	}

	const xLeft = -111 //assumes 540 fixed size
	const yTop = -111
	const xCenter = videoConfig.width * 0.5 - fitHalf
	const yCenter = videoConfig.height * 0.5 - fitHalf
	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	})
	// const frameLimit = useConvert.seconds2frames(1.66666)
	// const scale = (frame < frameLimit) ? scaleIn : 1
	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	)
	return (
		// <div className={use} style={{
		// 	// position: 'absolute',
		// 	// width: videoConfig.width,
		// 	// height: videoConfig.height,
		// 	transformOrigin: 'bottom center',
		// 	transform: `scale(${useConvert.fitScaleHeight({
		// 		srcH: fitDimention,
		// 		targetH: videoConfig.height,
		// 		targetW: videoConfig.width,
		// 	})})`,
		// }}>
			<div style={{
				position: 'absolute',
				width: fitDimention,
				height: fitDimention,
				left: xCenter,
				top: yCenter,
				transform: `scale(${scale}) rotate(${logoRotation}deg)`,
			}}>
				<Arc rotation={30} />
				<Arc rotation={90} />
				<Arc rotation={-30} />
				<Atom />
			</div>
		// </div>
	)
}
