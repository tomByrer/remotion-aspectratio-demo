import {
	ComponentType,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Player } from "@remotion/player";

import * as settings from "./helpers/settings"
import { MODE } from '../CONFIG'
import { prep } from './helpers/prep-transcript'

import { transcriptAboutRemotion } from "./transcripts/about-remotion"
import { transcriptShortRemotion } from "./transcripts/short-remotion"
import { transcriptTimeTest } from "./transcripts/time-test"
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { Controller } from "./arrangements/Controller"

export function Players() {

	// transcript data
	const [valTextarea, setValTextarea] = useState(transcriptAboutRemotion)
	const [preparedTR, setPreparedTR] = useState( prep(valTextarea) )
	const [durationInFrames, setDurationInFrames]= useState(preparedTR.tr.at(-1).timeEndFrame)
	useEffect(()=>{
		setPreparedTR( prep(valTextarea) )
		setDurationInFrames( preparedTR.tr.at(-1).timeEndFrame ) //COMPAT ES2021, Node16.6
		// console.log('imprted TR', transcriptAboutRemotion[1])
		// console.log('valTextarea', valTextarea[1])
		console.log('preparedTR', preparedTR.tr)
	}, valTextarea)

	// player convig
	const [fps, setFps] = useState(settings.presets[MODE].fps)

	const [aspectratios, setaspectratios] = useState(settings.presets[MODE].vidSizes)
	let arNameList = Object.keys(aspectratios)
	const [playbackRate, setPlaybackRate] = useState(settings.presets[MODE].player.speed)

	// UX show controlls on hover
  const [isHovering, setIsHovering] = useState(false)

	// loging
	const [logs, setLogs] = useState(()=> ['Configuring: ', ...arNameList, 'Playback speed: '+ playbackRate])
	function addLog(log){
		setLogs((l) => [...l, ` ${Date.now()} ${log}`])
	}

	function loadTranscript(t){
		addLog('load '+ t)
		setValTextarea(t)
	}

	// players setup
	let playersRefs = {}
	arNameList.map( (arName, i)=>{
		playersRefs[arName] = useRef(null)
	})
	const controllerRef= useRef(null)

	function getFrame(){
		return controllerRef.current.getCurrentFrame()
	}
	function parseMethod(method){
		const {groups} = /^(?<methodName>[a-zA-Z_$]+([\w_$]*))\((?<methodParam>.*)\)/.exec(method)
		return groups
	}
	function runController(method){
		addLog('ctr '+ method)
		const {methodName, methodParam} = parseMethod(method);
		controllerRef['current'][methodName](methodParam);
	}
	function runAllPlayers(method){
		addLog('all '+ method)
		const {methodName, methodParam} = parseMethod(method)
		arNameList.map( (arName, i)=>{
			playersRefs[arName]['current'][methodName](methodParam);
		})
	}
	function setAllPlaybackRate(n){
		addLog('setPlaybackRate: '+ n)
		setPlaybackRate(n)
	}

	useEffect(() => {
		const playCallbackListener =()=>{
			runAllPlayers(`play()`)
		};
		const pausedCallbackLitener =()=>{
			runAllPlayers(`pause()`)
		};
		const seekedCallbackLitener =(e)=>{
			runAllPlayers(`seekTo(${e.detail.frame})`)
		};
		const endedCallbackListener =()=>{
			addLog('ended')
		};
		const errorCallbackListener =(e)=>{
			addLog('error')
		};
		// const timeupdateCallbackLitener =(e)=>{
		// 	// setLogs((l) => [...l, 'timeupdate ' + e.detail.frame]);
		// };
		// const ratechangeCallbackListener =(e)=>{
		// 	// setLogs((l) => [...l, 'ratechange ' + e.detail.playbackRate + ' ' + Date.now(), ]);
		// };
		const {current} = controllerRef;
		if (!current) {
			return;
		}
		current.addEventListener('play', playCallbackListener);
		current.addEventListener('pause', pausedCallbackLitener);
		current.addEventListener('seeked', seekedCallbackLitener);
		current.addEventListener('ended', endedCallbackListener);
		current.addEventListener('error', errorCallbackListener);
		// current.addEventListener('timeupdate', timeupdateCallbackLitener);
		// current.addEventListener('ratechange', ratechangeCallbackListener);

		return () => {
			current.removeEventListener('play', playCallbackListener);
			current.removeEventListener('pause', pausedCallbackLitener);
			current.removeEventListener('seeked', seekedCallbackLitener);
			current.removeEventListener('ended', endedCallbackListener);
			current.removeEventListener('error', errorCallbackListener);
			// current.removeEventListener('timeupdate', timeupdateCallbackLitener);
			// current.removeEventListener('ratechange', ratechangeCallbackListener);
		};
	}, []);

	return (<>
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			gap: '1.16vmax',
			margin: '0 1vw',
		}}>

			<div
				className='player-controlls'
				onMouseEnter={()=> setIsHovering(true)}
				onMouseLeave={()=> setIsHovering(false)}
				style={{
					alignSelf: 'start',
					opacity: (isHovering ? 1 : 0.1618),
					width: '100%',
			}}>
				<Player
					component={Controller}
					inputProps={{
						speed: playbackRate,
					}}
					fps={fps}
					durationInFrames={durationInFrames}
					compositionWidth={900}
					compositionHeight={80}
					key={`controller`}
					playbackRate={playbackRate}
					ref={controllerRef}
					controls
					style={{
						height: '76px',
						width: '100%',
						backgroundColor: 'black',
					}}
				/>

				<div>
					<button type="button" onClick={()=> runController(`toggle()`)}>
						⏯️ Play|Pause
					</button>
					<span>
						<button type="button" onClick={()=> runController(`seekTo(50)`)}>
							seekTo 50
						</button>
						<button type="button" onClick={()=> runController(`seekTo(200)`)}>
							seekTo 200
						</button>
					</span>
					<span>
						<button type="button"	onClick={()=> runController(`seekTo(${getFrame() - fps * 5})`)}>
							-5 seconds
						</button>
						<button type="button"	onClick={()=> runController(`seekTo(${getFrame() + fps * 5})`)}>
							+5 seconds
						</button>
					</span>
					<span>
						<button type="button"	onClick={()=> runController(`seekTo(${getFrame() - 1})`)}>
							-1 frame
						</button>&nbsp;<button type="button"	onClick={()=> runController(`seekTo(${getFrame() + 1})`)}>
							+1 frame
						</button>
					</span>
					<span>
						<button type="button"	onClick={()=> setLogs((l) => [...l, `currentFrame=${getFrame()}`])}>
							log currentFrame
						</button>
					</span>
					<span>
						<button type="button"	onClick={()=> setAllPlaybackRate(0.5)}>
							🐢 0.5 speed
						</button>
						<button type="button"	onClick={()=> setAllPlaybackRate(1)}>
							1x speed
						</button>
						<button type="button"	onClick={()=> setAllPlaybackRate(2)}>
							🐇 2x speed
						</button>
					</span>
				</div>
			</div>

		<div>
			<div
				className='log'
				onMouseEnter={()=> setIsHovering(true)}
				onMouseLeave={()=> setIsHovering(false)}
				style={{
					alignSelf: 'start',
					minWidth: '350px',
					opacity: (isHovering ? 1 : 0.1618),
			}}>
				<h4>Log</h4>
				{logs
					.slice(0)
					.reverse()
					.slice(0, 7)
					.reverse()
					.map((l)=> <div key={l}>{l}</div>)
				}
			</div>
		</div>

		<div className='transcript'>
			<h4>Transcript</h4>

			{/* <button type="button"	onClick={()=> loadTranscript(transcriptTimeTest)}>
				Load Short
			</button> */}

			<p>Below is the JSON configureation.  Experiment by editing it!  If you 'break' the video, then reload the page.</p>
			<textarea
				onChange={(e)=> setValTextarea(JSON.parse(e.target.value))}
				value={JSON.stringify(valTextarea, undefined, 2) /*OPTIMIZE*/}
			>
			</textarea>
		</div>

		<div className='webvtt'>
			<h4>WebVTT</h4>

			<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_files">Web Video Text Tracks (captions)</a></p>
			<textarea
				value={preparedTR.vtt}
			>
			</textarea>
    </div>

			{ Object.entries(aspectratios).map( ([arName, data],i)=>
				<div className='player' key={'playerdiv'+ i + arName}>
					<h6 style={{
						opacity: (isHovering ? 1 : 0.1618),
					}}>
						{data.info.ratio +' ~ '+ data.info.about}
					</h6>
					<Player
						component={ArrangeSeries}
						inputProps={{
							transcript: preparedTR.tr,
							techText: `aspectratio: ${arName}-${data.info.ratio} ${JSON.stringify(data.dimention)}`,
						}}
						fps={fps}
						durationInFrames={durationInFrames}
						compositionWidth={data.dimention.w}
						compositionHeight={data.dimention.h}
						key={'remotion'+ i + arName}
						playbackRate={playbackRate}
						ref={playersRefs[arName]}
						// controls
						style={{
							outline: `0.16rem dashed #777`,
						}}
					/>
				</div>
			)}

		</div>
	</>)
}
