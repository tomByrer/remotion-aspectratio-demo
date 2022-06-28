import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {prep}	from './prep-transcript'

import { IntroCode } from '../segments/IntroCode'
import { ThreeRowsImgTitleSub } from '../segments/ThreeRowsImgTitleSub'
import { TitleOutlined } from '../segments/TitleOutlined'
import { TwoCenteredCode } from '../segments/TwoCenteredCode'
import { Warning } from '../parts/Warning'

function getComponent(componentName='TitleOutlined'){
	//TODO optimize
	switch(componentName){
		case 'IntroCode':
			return(IntroCode)
		case 'ThreeRowsImgTitleSub':
			return(ThreeRowsImgTitleSub)
		case 'TitleOutlined':
			return(TitleOutlined)
		case 'TwoCenteredCode':
			return(TwoCenteredCode)
		default:
			return(Warning)
		}
}

export function NiceComposition({
	idSuffix='-',
	transcript,
	overrides={},

	preset=presets[overrides.preset] ?? presets[transcript.config.preset] ?? presets['SMALL'],
}){
	const segList= overrides.segments || Array.from({length:(transcript.sequence.length)},(x,i)=>i)
	const vidKeyList= overrides.vidKeys || transcript.config?.vidKeys || Object.keys(preset.vidSizes)
	const CompsAllSegs = segList.map((segInt, segIdx)=>{
		if (typeof transcript?.sequence[segInt]?.layout === 'undefined'){  //doesSegmentExist?
			return <></>
		}
		const CompsVidsPerSeg = vidKeyList.map((vidKey, vidKeyIdx)=>{
			const idStub=`${segIdx}s${segInt}`
			// console.log('seg', segInt, vidKey, overrides)
			return(
				<SingleComposition
					transcript={transcript}
					overrides={overrides}
					// assign internal var
					idStub={idStub}
					idSuffix={idSuffix}
					preset={preset}
					segInt={segInt}
					vidKey={vidKey}
				/>
			)
		})
		return(<>{CompsVidsPerSeg}</>)
	})
	return(<>{CompsAllSegs}</>)
}

/* `vidKey` & `segment` are singular (was SimpleComp) */
export function SingleComposition({
	// segInt=0,
	transcript,
	overrides={props:{style:{style: 'insert'}}},

	preset=presets[overrides.preset] ?? presets[transcript.config.preset] ?? presets['SMALL'],
	vidKey=(typeof overrides.vidKey !== 'undefined') ? overrides.vidKey : Object.keys(preset.vidSizes)[0],
	vidSize=preset.vidSizes[vidKey],
	width=overrides.width ?? vidSize.dimention.w ?? 1920,
	height=overrides.height ?? vidSize.dimention.h ?? 1080,

	segInt=(typeof overrides.segment !== 'undefined') ? overrides.segment : 0,
	segment=prep(transcript).sequence[segInt],
	component=getComponent(segment.layout),
	durationInFrames=segment.timeDurFrames ?? 99,

	styleToInsert=(segment.style) ? JSON.stringify(segment.style)?.slice(1,-1) : '',
	styleBase=(overrides?.props?.style) ? JSON.stringify(overrides.props.style) : '',
	style = (styleBase && styleToInsert) ? JSON.parse( styleBase.replace(/"style":"insert"/gm, styleToInsert) ) : (styleToInsert) ? segment.style : (styleBase) ? overrides.props.style : {},
	defaultProps={aspects:{...segment, ...overrides.props, ...{style:style}}}, //segment = aspects

	idStub='',
	idSuffix='', // unique ID if clone & change only style, etc
	id=`${transcript.info.title}-${idStub}-${component.name}-${width}x${height}-${preset.fps}fps${idSuffix}`,
}){
	console.log('simple', idSuffix, id, defaultProps.aspects)
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
