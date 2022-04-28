import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';

export function Backdrop({
		from=0,
		duration=60,
		backColor='black',
}) {
	return (
		<Sequence from={from} durationInFrames={duration}>
			<div style={{flex: 1, backgroundColor: backColor}}>
			</div>
		</Sequence>
	)
}
