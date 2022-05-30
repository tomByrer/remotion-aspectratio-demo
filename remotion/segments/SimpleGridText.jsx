import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

import * as useConvert from '../helpers/useConvert'

// import './FrameCount.css'

export const SimpleGridText = ({
	aspects={
		timeDurSecs: 2,
		title: 'def title text',
		placeItems: 'center',
		fontVWRatio: 9,
		colorBack: '#111',
		colorFront: '#eee',
	}
}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div className='seq-frame-count' style={{
			minHeight: useConvert.vh(),
			minWidth: useConvert.vw(),
			display: 'grid',
			placeItems: aspects.placeItems,
			backgroundColor: aspects.colorBack,
		}}>

			<code
				style={{
					color: aspects.colorFront,
					fontSize: useConvert.vw(aspects.fontVWRatio)
				}}
			>
				{aspects.title}
			</code>
		</div>
	);
};
