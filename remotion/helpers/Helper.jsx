import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {MODE} from '../../CONFIG'

export function NiceComposition({
	component,
	preset,
	durationInSeconds=5,
	durationInFrames=durationInSeconds*preset.fps,
	vidKey='square',
	vidSize = preset.vidSizes[vidKey],
	width=(vidSize.dimention.w) || 1920,
	height=(vidSize.dimention.h) || 1080,
	defaultProps=defaultProps??{},
	id=`${component.name}-${width}x${height}-${preset.fps}fps`,
}){
	return (
		<Composition
			id={id}
			component={component}
			durationInFrames={durationInFrames}
			fps={preset.fps}
			width={width}
			height={height}
			defaultProps={defaultProps}
		/>
	)
}

export function NiceSequence({
	startSeconds=0,
	startFrames=Math.round(useConvert.seconds2frames(startSeconds)),
	// durationInSeconds='Infinity', // optional number
	// durationInFrames=durationInSeconds*fps,
	layout='none', // or 'absolute-fill'
	// name=null,
	children
}){
	return (
		<Sequence
			from={startFrames}
			layout={layout}
		>
			{children}
		</Sequence>
	)
}
