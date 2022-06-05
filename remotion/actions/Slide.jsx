import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert';

export function Lift({
	distanceInVH = -13.8888,
	transitionStart=useConvert.seconds2frames(0.833333),
	...props
}){
	const ultrawideAS = 2.388888888
	const scale = 1 + (ultrawideAS - useConvert.aspectRatio()) * 0.44
	const start = useVideoConfig().height * (1-scale) * 0.09 // 0.44/4?
	const translation = interpolate(
		spring({
			frame: useCurrentFrame() - transitionStart,
			fps: useVideoConfig().fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 1],
		[start, useConvert.vh(distanceInVH)]
	);

	return (
		<div style={{
			transform: `scale(${scale}) translateY(${translation}px)`,
		}}>
			{props.children}
		</div>
	)
}


export function Right({
	transitionStart=0,
	vhAdjust=-13.8888,
	pcLeftStart=-100,
	...props
}){
	const translation = interpolate(
		spring({
			frame: useCurrentFrame() - transitionStart,
			fps: useVideoConfig().fps,
			config: {
				damping: 61,
				mass: 8.09,
			},
		}),
		[0, 1],
		[pcLeftStart, 0]
	);

	return (
		<div style={{
			transform: `translate(${translation}%, ${useConvert.vh(vhAdjust)}px)`,
		}}>
			{props.children}
		</div>
	)
}


export function SunriseRight({
	transitionStart=0,
	vhAdjust=63.8888,
	pcLeftStart=-47,
	...props
}){
	const translation = interpolate(
		spring({
			frame: useCurrentFrame() - transitionStart,
			fps: useVideoConfig().fps,
			config: {
				damping: 61,
				mass: 8.09,
			},
		}),
		[0, 1],
		[pcLeftStart, 0]
	);
	const scale = useConvert.safeWidthGrow(1)
	let heightAdjust = useConvert.vh(vhAdjust)
	const aR = useConvert.aspectRatio()
	if (aR < 1) // skip if horizontal ratio
		heightAdjust += heightAdjust * (0.065/(aR))
	let height = (useConvert.cvh(translation * -1.2) - heightAdjust)
	return (
		<div style={{
			transform: `translate(${translation}%, ${height}px) scale(${scale})`,
		}}>
			{props.children}
		</div>
	)
}
