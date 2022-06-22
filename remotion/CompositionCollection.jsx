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
					title: 'Preset Test Text',
					style: {color: 'orange'},
				}}
			/>

			<SimpleComposition
				transcript={test_TitleOutlined}
				overrides={{
					// vidKeys: ['square'],
					segments: [0],
					// props:{
					// 	title: 'SimpleComposition Test Text',
					// 	style: {color: 'darkred'},
					// },
				}}
				/>

			<NiceComposition
				component={TitleOutlined}
				defaultProps={{
					title: 'NiceComposition Test Text',
					style: {color: 'darkred'},
				}}
				durationInSeconds={3}
				preset={settings.presets.SMALL}
				vidKey='square'
				/>

			<Composition
				id="TitleOutlined"
				component={TitleOutlined}
				durationInFrames={20}
				fps={16}
				width={800}
				height={200}
				defaultProps={{
					title: 'Title Test Text',
					style: {color: 'darkgray'},
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
						title: 'Comp variable Test Text',
						style: {color: 'brown'},
					}}
				/> */}
		</>
	);
};
