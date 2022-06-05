import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

import * as useConvert from '../helpers/useConvert'

// import './FrameCount.css'

export const TwoCenteredCode = ({
	aspects={
		colorBack: '#111',
		colorFront: '#eee',
		colorFrontCenter: null,
		fontVWRatio: 9,
		placeItems: 'center',
		textTop: 'top',
		codeLeft: 'left',
		codeRight: 'right',
		textLeft: 'text left',
		textRight: 'text right',
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
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gridTemplateRows: "1fr 1fr 1fr",
			gap: "0 0",
			gridAutoFlow: "row",
			gridTemplateAreas:
				`'textTop textTop'
				'codeLeft codeRight'
				'textLeft textRight'`,
			gridAutoRows: '1fr',
			placeItems: 'center',
			// textAlign: "center",
			backgroundColor: aspects.colorBack,
		}}>
			<div
				style={{
					gridArea: 'textTop',
					margin: '0 0.31em',
					color: aspects.colorFront,
					fontSize: useConvert.sizeFont(61.8),
			}}>
				{aspects.textTop}
			</div>
			<code
				style={{
					gridArea: 'codeLeft',
					margin: '0 0.31em',
					color: aspects.colorFrontCenter ?? aspects.colorFront,
					fontSize: useConvert.sizeFont(100),
				}}
			>
				{aspects.codeLeft}
			</code>
			<code
				style={{
					gridArea: 'codeRight',
					margin: '0 0.31em',
					color: aspects.colorFrontCenter ?? aspects.colorFront,
					fontSize: useConvert.sizeFont(100),
				}}
			>
				{aspects.codeRight}
			</code>
			<div
				style={{
					gridArea: 'textLeft',
					alignSelf: 'start',
					margin: '0 0.31em',
					placeItems: 'start',
					color: aspects.colorFront,
					fontSize: useConvert.sizeFont(61.8),
			}}>
				{aspects.textLeft}
			</div>
			<div
				style={{
					gridArea: 'textRight',
					alignSelf: 'start',
					margin: '0 0.31em',
					color: aspects.colorFront,
					fontSize: useConvert.sizeFont(61.8),
			}}>
				{aspects.textRight}
			</div>
		</div>
	);
};
