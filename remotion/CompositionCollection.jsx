import {Composition} from 'remotion';

import * as settings from "./helpers/settings"
import { prep } from './helpers/prep-transcript'
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { NiceComposition, SingleComposition } from './helpers/Helper'
import { TitleOutlined } from './parts/TitleOutlined'

// import * as time_test from '../remotion/transcripts/time_test'
import * as about_remotion from './transcripts/about_remotion'
import * as test_IntroCode from './transcripts/test_IntroCode'
import * as test_TitleOutlined from './transcripts/test_TitleOutlined'
import * as short_remotion from './transcripts/short_remotion'

export const CompositionCollection = () => {
	let preset = settings.presets.SMALL
	let vidKey = 'square'
	let vidSize = preset.vidSizes[vidKey]
	// let preparedTR = prep(transcriptTimeTest)

	let
		component = TitleOutlined,
		durationInSeconds = 3,
		durationInFrames = durationInSeconds * preset.fps,
		width = (vidSize.dimention.w) || 1920,
		height = (vidSize.dimention.h) || 1080,
		// defaultProps=defaultProps??{},
		id = `${component.name}-${width}x${height}-${preset.fps}fps`;

	return (
		<>
			{/* <Composition
				id="TitleOutlinedPreset"
				component={TitleOutlined}
				durationInFrames={30}
				fps={preset.fps}
				width={vidSize.dimention.w}
				height={vidSize.dimention.h}
				defaultProps={{
					title: 'Preset Test Text',
					style: {color: 'orange'},
				}}
			/> */}

			{/* <NiceComposition
				idSuffix='-noprops'
				transcript={test_TitleOutlined}
				overrides={{
					vidKeys: ['SDTV','square'],
					// height: 100,
					segments: [0, 1],
				}}
			/> */}
			{/* <NiceComposition
				idSuffix='-insertend'
				transcript={test_TitleOutlined}
				overrides={{
					vidKeys: ['SDTV','square'],
					// height: 100,
					segments: [0, 1],
					props:{
						// title: 'NiceComposition Test 2',
						style: {color: 'brown', backgroundColor:'linen', style: 'insert'},
					},
				}}
			/> */}
			{/* <NiceComposition
				idSuffix='-insertstart'
				transcript={test_TitleOutlined}
				overrides={{
					vidKeys: ['feed','square'],
					// height: 100,
					segments: [0, 1],
					props:{
						title: 'NiceComposition Purple',
						style: {style: 'insert', color:'purple'},
					},
				}}
			/> */}
			{/* <NiceComposition
				idSuffix='-insertstart'
				transcript={test_IntroCode}
				overrides={{
					vidKeys: ['feed','square'],
					// height: 100,
					segments: [0, 1], //NOTE too many segments to test
					props:{
						style: {style: 'insert', color:'purple'},
					},
				}}
			/> */}
			{/* <NiceComposition
				idSuffix='-IC'
				transcript={test_IntroCode}
				overrides={{
					vidKeys: ['feed','square'],
					// height: 100,
					segments: [0, 1], //NOTE too many segments to test
					props:{
						style: {style: 'insert', color:'purple'},
					},
				}}
			/> */}
			<NiceComposition
				idSuffix='-AR'
				transcript={about_remotion}  //TODO kinda ugly; no background, etc
				overrides={{
					vidKeys: ['square'],
					// height: 100,
					// segments: 'all', //NOTE no segments override = all
					props:{
						style: {style: 'insert', color:'purple'},
					},
				}}
			/>

			{/* <SingleComposition
				transcript={test_TitleOutlined}
				overrides={{
					// vidKey: 'square',
					height: 130,
					// segment: 1,
					props:{
						title: 'SimpleComp no seg, vidKey, nor style',
					},
				}}
			/>
			<SingleComposition
				transcript={test_TitleOutlined}
				overrides={{
					vidKey: 'square',
					height: 110,
					segment: 1,
					props:{
						title: 'SimpleComp Insert Style last',
						style: {color: 'orange', backgroundColor:'linen', style: 'insert'},
					},
				}}
			/>
			<SingleComposition
				transcript={test_TitleOutlined}
				overrides={{
					vidKey: 'square',
					height: 120,
					segment: 1,
					props:{
						title: 'SimpleComp Style Test first',
						style: {style: 'insert', color: 'orange', backgroundColor:'linen',},
					},
				}}
			/> */}
		</>
	);
};
