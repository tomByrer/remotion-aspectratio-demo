import {Composition, Sequence} from 'remotion'
import * as useConvert from '../helpers/useConvert'
import {presets} from './settings'
import {prep}	from './prep-transcript'

import { FrameCount } from '../segments/FrameCount'
import { IntroCode } from '../segments/IntroCode'
import { ThreeRowsImgTitleSub } from '../segments/ThreeRowsImgTitleSub'
import { TitleOutlined } from '../segments/TitleOutlined'
import { TwoCenteredCode } from '../segments/TwoCenteredCode'
import { Warning } from '../parts/Warning'

function getComponent(componentName='TitleOutlined'){
	//TODO optimize
	switch(componentName){
		case 'FrameCount':
			return(FrameCount)
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
	key,
	idSuffix='-',
	transcript,
	overrides={},
}){
console.log('nice', transcript)
	if (!transcript) return <></> //FIXME transcripts/warning
	overrides.config = (overrides.config) ? overrides.config : {};
	const presetKey= overrides.config?.presetKey || transcript?.config?.presetKey || Object.keys(presets)[0]
	overrides.config.presetKey = presetKey
	overrides.config.vidKeys ??= transcript.config?.vidKeys ?? Object.keys(presets[presetKey].vidSizes)

	transcript.config.presetKey = overrides.config.presetKey //for prep
	const sequence = prep(transcript).sequence

	const segList = overrides.config.segmentList || Array.from({length:(transcript.sequence.length)},(x,i)=>i) || [0]
	return(<>{segList.map((segInt, segIdx)=>{
		const segment = sequence[segInt]
		if (typeof segment?.layout === 'undefined'){  //doesSegmentExist?
			return <></>
		}
		return(<>{overrides.config.vidKeys.map((vidKey, vidKeyIdx)=>{
			const idStub=`${segIdx}s${segInt}`
			// console.log('seg', segInt, vidKey, overrides)
			return(
				<SingleComposition
					transcript={transcript}
					overrides={overrides}
					// assign internal var
					idStub={idStub}
					idSuffix={idSuffix}
					// segInt={segInt}
					segment={segment}
					vidKey={vidKey}
				/>
			)
		})}</>)
	})}</>)
}

/* `vidKey` & `segment` are singular (was SimpleComp) */
export function SingleComposition({
	// segInt=0,
	transcript,
	overrides={props:{style:{style: 'insert'}}},

	presetKey=overrides.config.presetKey ?? transcript.config?.presetKey ?? Object.keys(presets)[0],
	preset=presets[presetKey],
	vidKey=(typeof overrides.config.vidKey !== 'undefined') ? overrides.config.vidKey : Object.keys(preset.vidSizes)[0],
	vidSize=preset.vidSizes[vidKey],
	width=overrides.config.width ?? vidSize.dimention.w ?? 1920,
	height=overrides.config.height ?? vidSize.dimention.h ?? 1080,

	segInt=(typeof overrides.config.segmentList !== 'undefined') ? overrides.config.segmentList[0] : 0,  //MAYBE 'segmentList' or 'segmentInt'
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
