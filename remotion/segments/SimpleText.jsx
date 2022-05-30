import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

import * as useConvert from '../helpers/useConvert'

// import './FrameCount.css'

export const SimpleText = ({titleText, titleColor}) => {
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
						placeItems: 'center',
						backgroundColor: 'linen'
					}}>

						<code
							style={{
								color: 'orange',
								fontSize: useConvert.vw(20)
							}}
						>
							{titleText}
						</code>
					</div>
	);
};
