import { useCurrentFrame, useVideoConfig } from 'remotion'

/* Time */

export function seconds2frames(sec){
	// rounding up vs down (floor) ensures no blank/unclaimed frames at video end
	return Math.ceil( sec * useVideoConfig().fps )
}
export function framesUnclaimed(sec){
	return useVideoConfig().durationInFrames - seconds2frames(sec)
}
export function frames2seconds(frames, frameBump=0){
	return (frames + frameBump) / useVideoConfig().fps
}
export function framesDonePercent(){
	return (useCurrentFrame() +1) / useVideoConfig().durationInFrames * 100
}

/* Space */

export function vh(h=100){
	return h * useVideoConfig().height * 0.01
}

export function vw(w=100){
	return w * useVideoConfig().width * 0.01
}

function sizeMax(maxCeil){
	return Math.max(useVideoConfig().height, useVideoConfig().width, maxCeil)
}
export function vmax(size=100, maxCeil=null){
	return size * sizeMax(maxCeil) * 0.01
}

function sizeMin(){
	//NOTE adding minFloor not sraight-forward
	return Math.min(useVideoConfig().height, useVideoConfig().width)

}
export function vmin(size=100){
	return size * sizeMin() * 0.01
}

// export function diffMaxMin(size=1){
// 	return vmax(size) - vmin(size)
// }

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
export function isSquare(){
	return aspectRatio() === 1
}
export function isTall(){
	return aspectRatio() < 1
}
export function isWide(){
	return aspectRatio() > 1
}

export function aRSquareness(){
	const aR = aspectRatio()
	if (aR > 1) // skip if horizontal ratio
		return aR
	else {
		return 1/aR
	}
}

/* Resizing Abstractions */

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

export function vHWResponsive(vHeight=100, vWidth=100, vMaximum=100){
	return vh(vHeight) + vw(vWidth) + vmax(vMaximum)
}
export function sizeFontSmall(s=100){
	return vHWResponsive(1/aspectRatio(), 0.031*s, (0.02 + isSquare()*0.004)*s)
}
export function sizeFontHeader(s=100){
	return vHWResponsive(1/aspectRatio(), 0.062*s, (0.01 + isSquare()*0.004)*s)
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