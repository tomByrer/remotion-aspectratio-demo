import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {prep}	from './prep-transcript'

import {IntroCode} from '../segments/IntroCode'
import { TitleOutlined } from '../parts/TitleOutlined'
import { Warning } from '../parts/Warning'

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

function getComponent(componentName='TitleOutlined'){
	//TODO optimize
	switch(componentName){
		case 'TitleOutlined':
			return(TitleOutlined)
		default:
			return(Warning)
		}
}

export function SimpleComposition({
	transcript,
	overrides,

	segment=prep(transcript).sequence[0],
	component=getComponent(segment.layout),
	durationInFrames=segment.timeDurFrames,

	preset=presets[transcript.config.preset] ?? presets['SMALL'],
	vidKey=(typeof overrides.vidKeys?.[0] !== 'undefined') ? overrides.vidKeys[0] : Object.keys(preset.vidSizes)[0],
	vidSize=preset.vidSizes[vidKey],
	width=(vidSize.dimention.w) || 1920,
	height=(vidSize.dimention.h) || 1080,

	defaultProps=overrides.props ?? segment, //segment = aspects
	id=`${transcript.info.title}--${component.name}-${width}x${height}-${preset.fps}fps`,
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
