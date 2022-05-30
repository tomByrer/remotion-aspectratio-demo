import {
	ComponentType,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Players } from '../remotion/Players'

import { transcriptAboutRemotion } from '../remotion/transcripts/about-remotion'
import { transcriptShortRemotion } from '../remotion/transcripts/short-remotion'
import { transcriptTimeTest } from '../remotion/transcripts/time-test'

export default function Home() {
	const [showAbout, setShowAbout] = useState(true)
	const [showTimeTest, setShowTimeTest] = useState(true)
	function loadTranscript(t){
		console.log('load', t)
		// addLog('load '+ t)
		setChosenTranscript(t)
	}


	return (
		<div className="not-container">
			<Head>
				<title>Remotion Multi Player Demo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="title">
					<a href="https://www.remotion.dev/" target="_blank">Remotion</a> AspectRatio Demo by <a href="https://github.com/tomByrer" target="_blank">Tom Byrer</a>
				</h1>
				<p className="description">
					Please help by leaving <a href="https://github.com/tomByrer/remotion-aspectratio-demo/" target="_blank">&#11088; stars & issues on GitHub</a>.
				</p>
				<h2 className="title">
					Film toggles:
					<button type="button"	onClick={()=> setShowAbout(!showTimeTest)}>
						{ showAbout ? 'Hide 📕' : 'Show 📖' } 'Short Remotion Promo'
					</button>
					<button type="button"	onClick={()=> setShowTimeTest(!showTimeTest)}>
						{ showTimeTest ? 'Hide 📕' : 'Show 📖' } 'Time/Frame Test'
					</button>
				</h2>

				{ showAbout
					? <Players title='About Remotion Demo' transcript={transcriptAboutRemotion}/>
					: <h2 className="title">
					🛑 'Short Remotion Promo' is hidden
				</h2>
				}
				{ showTimeTest
					? <Players title='Time/Frame Test' transcript={transcriptTimeTest}/>
					: <h2 className="title">
					🛑 'Time/Frame Test' is hidden
				</h2>
				}
			</main>


			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #124365;
				}

				main {
					padding: 0.5rem 0;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				h1 {
					font-size: 1.62rem;
					line-height: 1.6;
				}

				code {
					background-color: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}


				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					font-size: 1.162em;
				}

				* {
					box-sizing: border-box;
				}

				h2 {
					font-size: 1.44rem;
					line-height: 1.44;
				}
				h2 button {
					margin: 0.3236em 0.162em;
					padding: 0.162em;
					font-size: 0.9em;
				}

				.title,
				.description {
					margin: 0;
					text-align: center;
				}
				.description {
					line-height: 1.5;
					font-size: 1.3rem;
				}

				a {
					color: #0070f3;
					text-decoration: none;
				}

				a:hover,
				a:focus,
				a:active {
					text-decoration: underline;
				}

				.player {
					padding-left: 1.618rem;
				}

				.player h6 {
					margin: 0.162em 0;
					font-size: 1.162em;
					color: #000;

					margin-left: 27px;
					transform-origin: -33px 4px;
					transform: rotate(90deg);
				}

				.player-controlls {
					margin-top: 27px;
				}
				.player-controlls div span {
					display: inline-block;
				}
				.player-controlls button {
					margin: 0.3236em 0.162em;
					padding: 0.162em;
					font-size: 1.162em;
				}

				.log {
					margin-top: 27px;
					height: 13em;
					width: 430px;
					overflow: scroll; /*bug will overflow when manually moving srubbar; seems new in Remotion 3.0 */
					font-size: 1.162em;
				}
				.transcript, .webvtt {
					margin-top: 27px;
					width: 28em;
				}
				textarea {
					height: 20em;
					width: inherit;
					font-size: 1.162em;
				}
				h4 {
					margin: 0 0 0.618em 0;
				}
			`}</style>
		</div>
	)
}
