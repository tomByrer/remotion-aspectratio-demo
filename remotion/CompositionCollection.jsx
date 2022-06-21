import {Composition} from 'remotion';

import * as settings from "./helpers/settings"
import { prep } from './helpers/prep-transcript'
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { NiceComposition, SimpleComposition } from './helpers/Helper'
import { TitleOutlined } from './parts/TitleOutlined'

// import * as time_test from '../remotion/transcripts/time_test'
import * as test_IntroCode from './transcripts/test_IntroCode'
import * as test_TitleOutlined from './transcripts/test_TitleOutlined'

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
			<Composition
				id="TitleOutlinedPreset"
				component={TitleOutlined}
				durationInFrames={30}
				fps={preset.fps}
				width={vidSize.dimention.w}
				height={vidSize.dimention.h}
				defaultProps={{
					displayText: 'Preset Test Text',
					style: {color: 'orange'},
				}}
			/>
			{/* <Composition
				id={id}
				component={TitleOutlined}
				durationInFrames={durationInFrames}
				fps={preset.fps}
				width={width}
				height={height}
				defaultProps={{
					displayText: 'Comp variable Test Text',
					style: {color: 'brown'},
				}}
			/> */}

			<NiceComposition
				component={TitleOutlined}
				defaultProps={{
					displayText: 'NiceComposition Test Text',
					style: {color: 'darkred'},
				}}
				durationInSeconds={3}
				preset={settings.presets.SMALL}
				vidKey='square'
			/>

			<SimpleComposition
				component={TitleOutlined}
				transcript={test_TitleOutlined}
				overrides={{
					vidKeys: ['square'],
					segments: [0],
					props:{
						displayText: 'SimpleComposition Test Text',
						style: {color: 'darkred'},
					},
				}}
			/>

			<Composition
				id="TitleOutlined"
				component={TitleOutlined}
				durationInFrames={20}
				fps={16}
				width={800}
				height={200}
				defaultProps={{
					displayText: 'Title Test Text',
					style: {color: 'darkgray'},
				}}
			/>
		</>
	);
};
