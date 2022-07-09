import { useCurrentFrame, useVideoConfig, Sequence, Series,
	continueRender, delayRender, staticFile } from "remotion"
import * as useConvert from '../helpers/useConvert'

import { ProgressBar } from 	'../parts/ProgressBar'
import { TwoCenteredCode } from '../segments/TwoCenteredCode'

// const waitForFont = delayRender()
// const fileHahmlet = staticFile("hahmlet-vf.woff2")
// console.log('fileHahmlet', fileHahmlet)
// const hahmlet = new FontFace(
//   `hahmlet`,
//   `url(${fileHahmlet}) format('woff2')`
// )
// hahmlet
//   .load()
//   .then(() => {
//     document.fonts.add(hahmlet);
//     continueRender(waitForFont);
//   })
//   .catch((err) => console.log("Error loading font", err));


export const FrameCount = ({
	aspects={
		placeItems: 'center',
		digitCount: 3, //TODO: change this & fontVWRatio together
		fontVWRatio: 44,
		colorBack: 'hsl(27,65%,97%)',
		colorFront: 'darkorange',
	}
}) => {
	function FormatLeadingChar( //WARN useEffecty forces FormatLeadingChar() to be in same file
		number=1,
		intergerDigits=3,
		fractionDigits=0,
		placeholder='_',
		opacity=0.382,
		){
			let num = number.toFixed(fractionDigits)
			// const numIntLen = number.toFixed().length  bug:loses if rounding up
			const numIntLen = String(num | 0).length
			return <>
			<span style={{opacity:opacity}}>
				{placeholder.repeat(intergerDigits - numIntLen)}
			</span>{num}</>
	}
	const FADED_TEXT = 0.618

	aspects.rowTop = <span style={{fontFamily:'hahmlet', opacity:FADED_TEXT}}>w:{useVideoConfig().width} h:{useVideoConfig().height} fps:{useVideoConfig().fps}</span>

	//MUST obtain frame count at top-level, before Sequence
	// 1-index since humans start counting at one ;)
	const FRAME_DIGITS = String( useVideoConfig().durationInFrames ).length
	const SEC_DIGITS = String( useConvert.frames2seconds( useVideoConfig().durationInFrames) ).length
	aspects.codeLeft = FormatLeadingChar( useCurrentFrame() +1, FRAME_DIGITS, 0 )
	const ROUNDOFF = 2
	aspects.codeRight = FormatLeadingChar( useConvert.frames2seconds(useCurrentFrame(),+1), SEC_DIGITS, ROUNDOFF )
	aspects.textLeft = <span style={{fontFamily:'hahmlet', opacity:FADED_TEXT}}>frames of {useVideoConfig().durationInFrames}</span>
	aspects.textRight = <span style={{fontFamily:'hahmlet', opacity:FADED_TEXT}}>seconds of {useConvert.frames2seconds( useVideoConfig().durationInFrames )}</span>

	aspects.rowBottom = <ProgressBar colorBackDone={aspects.colorFront} />

	return(
			<TwoCenteredCode aspects={aspects} />
	)
}