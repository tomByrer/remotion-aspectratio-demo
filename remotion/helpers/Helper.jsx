import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {prep}	from './prep-transcript'

import {IntroCode} from '../segments/IntroCode'
import { TitleOutlined } from '../parts/TitleOutlined'
import { Warning } from '../parts/Warning'

function getComponent(componentName='TitleOutlined'){
	//TODO optimize
	switch(componentName){
		case 'TitleOutlined':
			return(TitleOutlined)
		default:
			return(Warning)
		}
}

export function NiceComposition({
	transcript,
	overrides={},

	preset=presets[transcript.config.preset] ?? presets['SMALL'],
	vidKey=(typeof overrides.vidKeys?.[0] !== 'undefined') ? overrides.vidKeys[0] : Object.keys(preset.vidSizes)[0],
	// vidKey=overrides.vidKeys?.[0] ?? Object.keys(preset.vidSizes)[0],
	vidSize=preset.vidSizes[vidKey],
	width=overrides.width ?? vidSize.dimention.w ?? 1920,
	height=overrides.height ?? vidSize.dimention.h ?? 1080,

	segInt=(typeof overrides.segments?.[0] !== 'undefined') ? overrides.segments[0] : 1,
	segment=prep(transcript).sequence[segInt],
	component=getComponent(segment.layout),
	durationInFrames=segment.timeDurFrames ?? 99,

	// defaultProps=overrides.props ?? segment, //segment = aspects
	defaultProps={...segment, ...overrides.props}, //segment = aspects
	id=`${transcript.info.title}--${component.name}-${width}x${height}-${preset.fps}fps`,
}){
	console.log('seg', segment)
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

export function SimpleComposition({
	transcript,
	overrides={},

	segment=prep(transcript).sequence[0],
	component=getComponent(segment.layout),
	durationInFrames=segment.timeDurFrames ?? 99,

	preset=presets[transcript.config.preset] ?? presets['SMALL'],
	vidKey=(typeof overrides.vidKeys?.[0] !== 'undefined') ? overrides.vidKeys[0] : Object.keys(preset.vidSizes)[0],
	vidSize=preset.vidSizes[vidKey],
	width=overrides.width ?? vidSize.dimention.w ?? 1920,
	height=overrides.height ?? vidSize.dimention.h ?? 1080,

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
