import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

import * as useConvert from '../helpers/useConvert'

// import './FrameCount.css'

export const SimpleCenteredCode = ({
	aspects={
		colorBack: '#111',
		colorFront: '#eee',
		colorFrontCenter: null,
		fontVWRatio: 9,
		placeItems: 'center',
		textBottom: 'bottom',
		textCenter: 'def code text',
		textTop: 'top',
		timeDurSecs: 2,
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
			gridAutoRows: '1fr',
			placeItems: aspects.placeItems,
			backgroundColor: aspects.colorBack,
		}}>
			<div
				style={{
					color: aspects.colorFront,
					fontSize: useConvert.sizeFont(61.8),
			}}>
				{aspects.textTop}
			</div>
			<code
				style={{
					color: aspects.colorFrontCenter ?? aspects.colorFront,
					fontSize: useConvert.sizeFont(100),
				}}
			>
				{aspects.textCenter}
			</code>
			<div
				style={{
					color: aspects.colorFront,
					fontSize: useConvert.sizeFont(61.8),
			}}>
				{aspects.textBottom}
			</div>
		</div>
	);
};
