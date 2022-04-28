import {interpolate, series, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert'

export function Controller({
	durationInFrames=useVideoConfig().durationInFrames,
	speed=1,
	titleText='Controller',
	frontColor='#39f437',
	backColor='#161b28d1',
}) {
	const frame = useCurrentFrame()
	// const segmentFrames = useConvert.seconds(durationSeconds * 0.25)

	return (
		<div style={{flex: '90', backgroundColor: backColor}}>
			<pre><code
				style={{
					position: 'absolute',
					margin: '-25px 0 0 355px',
					color: frontColor,
					fontFamily: 'monospace',
					fontSize: '27px',
					textAlign: 'left',
					opacity: 90,
				}}
			>
				{`${frame}/${frame - durationInFrames} FPS:${useVideoConfig()
.fps} Speed:${speed}`}
			</code></pre>
		</div>
	)
}
