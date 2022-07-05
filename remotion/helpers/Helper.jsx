import { Composition, Sequence } from 'remotion'
import * as useConvert from '../helpers/useConvert'
import { prep }	from './prep-transcript'
import { process }	from './process-transcript'

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
	if (!transcript) return <></> //FIXME transcripts/warning
	let preppedTR = prep(transcript, overrides)
	const sequence = process(preppedTR).sequence

	return(<>{preppedTR.config.segmentList.map((segInt, segIdx)=>{
		const segment = sequence[segInt]
		if (typeof segment?.layout === 'undefined'){  //doesSegmentExist?
			return <></>
		}
		return(<>{preppedTR.config.vidKeys.map((vidKey, vidKeyIdx)=>{
			const idStub=`${segIdx}s${segInt}`
			// console.log('seg', segInt, vidKey, overrides)
			return(
				<SingleComposition
					transcript={preppedTR}
					overrides={overrides}
					// assign internal var
					idStub={idStub}
					idSuffix={idSuffix}
					segInt={segInt} // optimization?  so don't have to calc
					segment={segment}
					vidKey={vidKey}
				/>
			)
		})}</>)
	})}</>)
}

/* `vidKey` & `segment` are singular (was SimpleComp) */
export function SingleComposition({
	transcript,
	// overrides={props:{style:{style: 'insert'}}},  REMOVED; use `prep(transcript, overrides)` with this

	vidKey=(typeof transcript.config.vidKey !== 'undefined') ? transcript.config.vidKey : Object.keys(preset.vidSizes)[0],
	vidSize=transcript.config.preset.vidSizes[vidKey],
	width=transcript.config.width ?? vidSize.dimention.w ?? 1920,
	height=transcript.config.height ?? vidSize.dimention.h ?? 1080,

	segInt=(typeof transcript.config.segmentList !== 'undefined') ? transcript.config.segmentList[0] : 0,
	segment=process(transcript).sequence[segInt],
	component=getComponent(segment.layout),
	// durationInFrames=segment.timeDurFrames ?? 99,

	styleToInsert=(segment.style) ? JSON.stringify(segment.style)?.slice(1,-1) : '',
	styleBase=(transcript?.props?.style) ? JSON.stringify(transcript.props.style) : '',
	style = (styleBase && styleToInsert) ? JSON.parse( styleBase.replace(/"style":"insert"/gm, styleToInsert) ) : (styleToInsert) ? segment.style : (styleBase) ? transcript.props.style : {},
	defaultProps={aspects:{...segment, ...transcript.props, ...{style:style}}}, //segment = aspects

	idStub='',
	idSuffix='', // unique ID if clone & change only style, etc
	id=`${transcript.info.title}-${idStub}-${component.name}-${width}x${height}-${transcript.config.preset.fps}fps${idSuffix}`,
}){
	return (
		<Composition
			id={id}
			component={component}
			durationInFrames={segment.timeDurFrames}
			fps={transcript.config.preset.fps}
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
