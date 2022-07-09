import { useEffect } from "react"
import { useCurrentFrame, useVideoConfig, Sequence, Series,
	continueRender, delayRender, staticFile } from "remotion"
import * as useConvert from '../helpers/useConvert'

export const TwoCenteredCode = ({
	aspects={
		colorBack: '#111',
		colorFront: '#eee',
		colorFrontCenter: null,
		fontVWRatio: 9,
		placeItems: 'center',
		rowTop: 'top',
		codeLeft: 'left',
		codeRight: 'right',
		textLeft: 'text left',
		textRight: 'text right',
		timeDurSecs: 2,
	}
}) => {
	const FONTSIZE_CENTER = useConvert.sizeFontHeader(100)
	const FONTSIZE_LOWER = useConvert.sizeFontHeader(68)

	return (
		<div className='seq-frame-count' style={{
			minHeight: useConvert.vh(),
			minWidth: useConvert.vw(),
			display: "grid",
			gridAutoColumns: '1fr',
			gridAutoRows: '1fr',
			// gridTemplateColumns: "1fr 1fr",
			// gridTemplateRows: "1fr 1fr 1fr 1fr",
			gap: "0 0",
			gridAutoFlow: "row",
			gridTemplateAreas:
				`"rowTop rowTop"
				"codeLeft codeRight"
				"textLeft textRight"
				"rowBottom rowBottom"`,
			placeItems: 'center',
			textAlign: "center",
			backgroundColor: aspects.colorBack,
		}}>
			<div
				style={{
					gridArea: 'rowTop',
					margin: '0 0.31em',
					color: aspects.colorFront,
					fontSize: useConvert.sizeFontHeader(61.8),
					whiteSpace: 'pre-wrap',
			}}>
				{aspects.rowTop}
			</div>
			<div
				style={{
					gridArea: 'codeLeft',
					alignSelf: 'end',
					margin: '0 0.31em',
					color: aspects.colorFrontCenter ?? aspects.colorFront,
					fontFamily: 'fontMono', //via FontFace() JS API in parent
					fontSize: FONTSIZE_CENTER,
				}}
			>
				{aspects.codeLeft}
			</div>
			<div
				style={{
					gridArea: 'codeRight',
					alignSelf: 'end',
					margin: '0 0.31em',
					color: aspects.colorFrontCenter ?? aspects.colorFront,
					fontFamily: 'fontMono',
					fontSize: FONTSIZE_CENTER,
				}}
			>
				{aspects.codeRight}
			</div>
			<div
				style={{
					gridArea: 'textLeft',
					alignSelf: 'start',
					margin: '0 1em',
					placeItems: 'start',
					color: aspects.colorFront,
					fontSize: FONTSIZE_LOWER,
			}}>
				{aspects.textLeft}
			</div>
			<div
				style={{
					gridArea: 'textRight',
					alignSelf: 'start',
					margin: '0 1em',
					color: aspects.colorFront,
					fontSize: FONTSIZE_LOWER,
			}}>
				{aspects.textRight}
			</div>
			<div
				style={{
					gridArea: 'rowBottom',
					alignSelf: 'center',
					margin: '0 1em',
					fontSize: FONTSIZE_LOWER,
				}}>
					{aspects.rowBottom}
				</div>
		</div>
	);
};
