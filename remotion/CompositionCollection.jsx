import {Composition} from 'remotion';

import * as settings from "./helpers/settings"
import { prep } from './helpers/prep-transcript'
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { NiceComposition } from './helpers/Helper'
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import { TitleOutlined } from './parts/TitleOutlined'

import { transcriptTimeTest } from '../remotion/transcripts/time-test'

export const CompositionCollection = () => {
	let preset = settings.presets.SMALL
	let vidKey = 'square'
	let vidSize = preset.vidSizes[vidKey]
	let preparedTR = prep(transcriptTimeTest)
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

			<NiceComposition
				id='TitleOutlined-360x360-16fps'
				component={TitleOutlined}
				defaultProps={{
					displayText: 'NiceComposition Test Text',
					style: {color: 'darkred'},
				}}
				durationInSeconds={3}
				preset={settings.presets.SMALL}
				vidKey='square'
			/>

			{/* <Composition
				id="TitleOutlined"
				component={ArrangeSeries}
				durationInFrames={preparedTR.tr.at(-1).timeEndFrame}
				fps={preset.fps}
				width={vidSize.dimention.w}
				height={vidSize.dimention.w}
				defaultProps={{
					transcript: preparedTR.tr,
				}}
			/> */}
			{/* <Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{
					backgroundColor: '#131C20',
					titleText: 'Welcome to Remotion',
					titleColor: '#86A8E7',
					subtitleText: 'Animated videos using ReactJS',
					subtitleColor: '#91EAE4',
					test: 'test ignire me',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1080}
				height={1080}
			/> */}
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
