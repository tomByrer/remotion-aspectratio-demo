import * as useConvert from '../helpers/useConvert'
import * as useAnimation from '../actions/useAnimation'

export function IntroCode({
	aspects={
		timeDurSecs: 2,
		title: 'def title text',
		fontVWRatio: 3.7234,
		colorBack: '#111',
		colorFront: '#eee',
		style: {},
	}
}) {
	return (
		<div style={{flex: '90', backgroundColor: aspects.colorBack}}>
			<pre><code
				style={{
					position: 'absolute',
					margin: '0 6.18%',
					bottom: useConvert.vh(12.9629),
					color: aspects.colorFront,
					fontFamily: 'monospace',
					fontSize: useConvert.vw(aspects.fontVWRatio),
					textAlign: 'left',
					opacity: useAnimation.fadeInOutTapered(aspects.timeDurSecs),
					...aspects.style,
				}}
			>
				{aspects.title}
			</code></pre>
		</div>
	)
}
