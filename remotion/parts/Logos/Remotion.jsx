import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../../helpers/useConvert';


function Triangle({
	size,
	opacity = 1,
	color1 = '#42e9f5',
	color2 = '#4290f5',
	idSlug = `gradient${color1 + color2}`.replaceAll('#', '')
}) {
	return (
		<svg
			width={size}
			height={size}
			style={{
				opacity,
				width: size,
				height: size,
				position: 'absolute',
				transform: 'rotate(90deg)',
			}}
			viewBox="0 0 400 400"
		>
			<defs>
				<linearGradient id={idSlug}>
					<stop stopColor={color1} stopOpacity={1} offset="0" />
					<stop stopColor={color2} stopOpacity={1} offset="100%" />
				</linearGradient>
			</defs>
			<g stroke={`url(#${idSlug})`} strokeWidth="100" strokeLinejoin="round">
				<path
					fill={`url(#${idSlug})`}
					d="M 102 272 a 196 100 0 0 0 195 5 A 196 240 0 0 0 200 102.259 A 196 240 0 0 0 102 272 z" />
			</g>
		</svg>
	)
};

const centered = {
	justifyContent: 'center',
	alignItems: 'center',
}
export function LogoRemotion({
	animationSeconds=0.618,
	use='logo', // or 'transition' as effect
	opacityReduce=(use==='logo') ? 1 : 0.1618,
	fitDimention=220,
}) {
	const videoConfig = useVideoConfig()
	function scale(index) {
		return spring({
			frame: useCurrentFrame() - index * useConvert.seconds(animationSeconds),
			fps: videoConfig.fps,
			config: {
				mass: 2,
				damping: 200,
			},
		})
	}
	const baseSize =
		(use === 'transition')
			? useConvert.vmax(214 - 33 * useConvert.aRSquareness())
			: fitDimention
	// 		: (useConvert.aspectRatio() >= 1)
	// 			? 42.4
	// 			: 68
	// );
	// const baseSize = useConvert.vmin(percentSize)
	const sizes = [
		baseSize*1.3185694,
		baseSize*1.1157082,
		baseSize*0.9128541,
		baseSize*0.71,
	]
	const fitHalf = fitDimention *0.5
	const xCenter = videoConfig.width * 0.5 - fitHalf
	const yCenter = videoConfig.height * 0.5 - fitHalf
	return(
		<div className={use} style={{
			position: 'absolute',
			width: fitDimention,
			height: fitDimention,
			left: xCenter,
			top: yCenter,
			// transform: `scale(${scale}) rotate(${logoRotation}deg)`,
		}}>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0)})`,
				}}
			>
				<Triangle size={sizes[0]} color1='white' color2='white' />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0.6)})`,
				}}
			>
				<Triangle size={sizes[1]} opacity={0.2 * opacityReduce} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(1)})`,
				}}
			>
				<Triangle size={sizes[2]} opacity={0.4 * opacityReduce} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(2)})`,
				}}
			>
				<Triangle size={sizes[3]} opacity={opacityReduce}/>
			</AbsoluteFill>
		</div>
	)
}
