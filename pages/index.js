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

import * as about_remotion from '../remotion/transcripts/about_remotion'
import * as time_test from '../remotion/transcripts/time_test'

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
					<br />
					Caution: this is my playground, so things may change anytime.
				</p>
				<h2 className="title">
					Film toggles:
					<button type="button"	onClick={()=> setShowAbout(!showAbout)}>
						{ showAbout ? 'Hide 📕' : 'Show 📖' } {about_remotion.info.title}
					</button>
					<button type="button"	onClick={()=> setShowTimeTest(!showTimeTest)}>
						{ showTimeTest ? 'Hide 📕' : 'Show 📖' } {time_test.info.title}
					</button>
				</h2>

				{ showAbout
					? <Players title={about_remotion.info.title} transcript={about_remotion}/>
					: <h2 className="title">
					🛑 {about_remotion.info.title} is hidden
				</h2>
				}
				{ showTimeTest
					? <Players title={time_test.info.title} transcript={time_test}/>
					: <h2 className="title">
					🛑 {time_test.info.title} is hidden
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

				h1 {
					font-size: 1.62rem;
					line-height: 1.6;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>
		</div>
	)
}
