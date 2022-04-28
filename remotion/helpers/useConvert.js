import {useVideoConfig} from 'remotion'

/* Time */

export function seconds(sec){
	// rounding up vs down (floor) ensures no blank/unclaimed frames at video end
	return Math.ceil( sec * useVideoConfig().fps )
}

export function framesUnclaimed(sec){
	return useVideoConfig().durationInFrames - seconds(sec)
}

/* Space */

export function vh(h=100){
	return h * useVideoConfig().height * 0.01
}

export function vw(w=100){
	return w * useVideoConfig().width * 0.01
}

function sizeMax(maxFloor){
	return Math.max(useVideoConfig().height, useVideoConfig().width, maxFloor)
}
export function vmax(size=100, maxFloor=null){
	return size * sizeMax(maxFloor) * 0.01
}

function sizeMin(){
	return Math.min(useVideoConfig().height, useVideoConfig().width)
}
export function vmin(size=100){
	return size * sizeMin() * 0.01
}

export function diffMaxMin(size=1){
	return vmax(size) - vmin(size)
}

/* Space - Centered */

export function cvh(h=0){ // negitive = down
	return h * useVideoConfig().height * 0.005 + useVideoConfig().height * 0.5
}

export function cvw(w=0){ // negitive = left
	return w * useVideoConfig().width * 0.005 + useVideoConfig().width * 0.5
}

/* Aspect Ratio helpers */

export function aspectRatio(){
	return useVideoConfig().width / useVideoConfig().height
}

export function aRSquareness(){
	const aR = aspectRatio()
	if (aR > 1) // skip if horizontal ratio
		return aR
	else {
		return 1/aR
	}
}

export function safeWidthShrink(w, ratioBoundry){
	if (aspectRatio() >= ratioBoundry)
		return w
	else
		return w * ratioBoundry
}

export function safeWidthGrow(w){
	const aR = aspectRatio()
	if (aR > 1) // skip if horizontal ratio
		return w
	else {
		let resized = (1/aR)*w
		resized -= resized*resized*0.11 //compress growth
		return resized
	}
}

export function fitScaleHeight({
	srcH=100,
	srcW=srcH,
	targetH=200,
	targetW=targetH,
}){
	const srcMax = Math.max(srcH, srcW)
	let targetMin = Math.min(targetH, targetW)
	if (aspectRatio() <= 1){ targetMin = targetW * 2}
	return targetMin / srcMax
}