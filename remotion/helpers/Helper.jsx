import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {MODE} from '../../CONFIG'

export function NiceComposition({
	component,
	fps=30,
	durationInSeconds=5,
	durationInFrames=durationInSeconds*fps,
	resolution='ar16_9',
	width=(presets[MODE][resolution],w) || 1920,
	height=(presets[MODE][resolution],h) || 1080,
	defaultProps={},
	id=`${component.name}-${width}x${height}-${fps}fps`,
}){
	return (
		<Composition
			id={id}
			component={component}
			fps={fps}
			durationInFrames={durationInFrames}
			width={width}
			height={height}
			defaultProps={defaultProps}
		/>
	)
}

export function NiceSequence({
	startSeconds=0,
	startFrames=Math.round(useConvert.seconds(startSeconds)),
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
