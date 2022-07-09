import { useEffect } from "react"
import { useCurrentFrame, useVideoConfig, Sequence, Series,
	continueRender, delayRender, staticFile } from "remotion"
import * as useConvert from '../helpers/useConvert'

import { ProgressBar } from 	'../parts/ProgressBar'
import { TwoCenteredCode } from '../segments/TwoCenteredCode'

function FormatLeadingChar( //WARN useEffect forces FormatLeadingChar() to be in same file
	number=1,
	intergerDigits=3,
	fractionDigits=0,
	placeholder='_',
	opacity=0.382,
){
	let num = number.toFixed(fractionDigits)
	// const numIntLen = number.toFixed().length  bug:loses if rounding up
	const numIntLen = String(num | 0).length

	//WARN do not move <></>
	return <>
		<span style={{fontFamily:'fontMono', opacity:opacity}}>
			{placeholder.repeat(intergerDigits - numIntLen)}
		</span>{num}</>
}


export const FrameCount = ({
	aspects={
		placeItems: 'center',
		digitCount: 3, //TODO: change this & fontVWRatio together
		fontVWRatio: 44,
		colorBack: 'hsl(27,65%,97%)',
		colorFront: 'darkorange',
		fadeText: 0.618,
	}
}) => {
	useEffect(()=>{ //NextJS needs useEffect, otherwise Remotion is fine to put font loading outside compoenent
		const waitForFont = delayRender()
		const fontCopy = new FontFace(
			`fontCopy`,// CSS name
			`url(${staticFile("hahmlet-vf.woff2")}) format('woff2')`
		)
		fontCopy
			.load()
			.then(() => {
				document.fonts.add(fontCopy);
				continueRender(waitForFont);
			})
			.catch((err) => console.log("Error loading font", err));

		const fontMono = new FontFace(
			`fontMono`,
			`url(${staticFile("IBMPlexMono-Medium-Latin1.woff2")}) format('woff2')`
		)
		fontMono
			.load()
			.then(() => {
				document.fonts.add(fontMono);
				continueRender(waitForFont);
			})
			.catch((err) => console.log("Error loading font", err));
	})

	aspects.rowTop = <span style={{fontFamily:'fontCopy', opacity:aspects.fadeText}}>w:{useVideoConfig().width} h:{useVideoConfig().height} fps:{useVideoConfig().fps}</span>

	//MUST obtain frame count at top-level, before Sequence
	// 1-index since humans start counting at one ;)
	const FRAME_DIGITS = String( useVideoConfig().durationInFrames ).length
	const SEC_DIGITS = String( useConvert.frames2seconds( useVideoConfig().durationInFrames) ).length
	aspects.codeLeft = FormatLeadingChar( useCurrentFrame() +1, FRAME_DIGITS, 0 )
	const ROUNDOFF = 2
	aspects.codeRight = FormatLeadingChar( useConvert.frames2seconds(useCurrentFrame(),+1), SEC_DIGITS, ROUNDOFF )
	aspects.textLeft = <span style={{fontFamily:'fontCopy', opacity:aspects.fadeText}}>frames of {useVideoConfig().durationInFrames}</span>
	aspects.textRight = <span style={{fontFamily:'fontCopy', opacity:aspects.fadeText}}>seconds of {useConvert.frames2seconds( useVideoConfig().durationInFrames )}</span>

	aspects.rowBottom = <ProgressBar colorBackDone={aspects.colorFront} />

	return(
			<TwoCenteredCode aspects={aspects} />
	)
}
