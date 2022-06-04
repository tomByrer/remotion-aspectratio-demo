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
import { transcriptTimeTest } from '../remotion/transcripts/time-test'

export default function Home() {
	const [showAbout, setShowAbout] = useState(false)
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
