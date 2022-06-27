import JsxParser from "react-jsx-parser"
import * as H from '../helpers/Helper'

import * as Slide from '../actions/Slide'
import * as Logos from '../parts/Logos'
import {Subtitle} from '../parts/Subtitle';
import {Title} from '../parts/Title';

export function ThreeRowsImgTitleSub({
	aspects={
		timeDurSecs: 2,
		logo: <div>logo</div>,
		title: 'def title text',
		subtitle: 'def subtitle text',
		colorBack: '#111',
		colorFront: '#eee',
	}
}) {
	const AnimatedBackground = <JsxParser
		renderInWrapper={false}
		components={{ Logos, Slide }}
		jsx={aspects.animatedLogo}
	/>
	return (<div style={{
		height: '100%',
		width: '100%',
		display: 'grid',
		gridTemplateRows: '8fr 1fr 2.5fr',
		gridGap: '0',
		backgroundColor: aspects.colorBack,
	}}>
			{AnimatedBackground}

		<H.NiceSequence startSeconds={aspects.timeDurSecs * 0.1618} style={{
			// justifySelf: 'baseline',
		}}>
			<Title title={aspects.title} style={{
				gridRow: '2',
				margin: '0 0.5em',
				color: aspects.colorFront,
			}}/>
		</H.NiceSequence>

		<H.NiceSequence startSeconds={aspects.timeDurSecs * 0.45} style={{
			margin: '0',
		}}>
			<Subtitle title={aspects.subtitle} style={{
				gridRow: '3',
				alignSelf: 'start',
				margin: '0.18em 0.5em 0 0.5em',
				color: aspects.colorFront,
			}}/>
		</H.NiceSequence>
	</div>)
}
