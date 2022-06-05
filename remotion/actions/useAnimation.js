import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion'
import * as useConvert from '../helpers/useConvert';

export function fadeIn(seconds=0.618, widen) {
	const frame = useCurrentFrame()
	const frameLen = (typeof seconds !== 'undefined')
							? useConvert.seconds2frames(seconds)
							: useConvert.seconds2frames(0.5)
	const step = (typeof widen !== 'undefined')
							? frameLen * widen
							: frameLen * 0.25
	return interpolate(
		frame,
		[0, step, frameLen - step, frameLen],
		[0, 0.32, 0.8382, 0.999], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
	 }
	)
}

export function fadeOut(seconds=0.5) {
	const frame = useCurrentFrame()
	return interpolate(
		frame,
		[0, useConvert.seconds2frames(seconds)],
		[1, 0], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
	 }
	)
}

export function fadeInOutTapered(seconds, widen) {
	const frame = useCurrentFrame()
	const frameLen = (typeof seconds !== 'undefined')
							? useConvert.seconds2frames(seconds)
							: useConvert.seconds2frames(0.5)
	const step = (typeof widen !== 'undefined')
							? frameLen * widen
							: frameLen * 0.25
	return interpolate(
		frame,
		[0, step, frameLen - step, frameLen],
		[0, 1, 0.8382, 0], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
	 }
	)
}
