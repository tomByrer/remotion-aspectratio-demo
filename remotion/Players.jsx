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
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { Controller } from "./arrangements/Controller"

export function Players({transcript, title}) {

	// transcript data
	const [valTextarea, setValTextarea] = useState(transcript)
	const [preparedTR, setPreparedTR] = useState( prep(valTextarea) )
	const [durationInFrames, setDurationInFrames]= useState(preparedTR.tr.at(-1).timeEndFrame)
	useEffect(()=>{
		setPreparedTR( prep(valTextarea) )
		setDurationInFrames( preparedTR.tr.at(-1).timeEndFrame ) //COMPAT ES2021, Node16.6
		// console.log('preparedTR', preparedTR.tr)
	}, valTextarea)

	// player convig
	const [fps, setFps] = useState(settings.presets[MODE].fps)

	const [aspectratios, setAspectratios] = useState(settings.presets[MODE].vidSizes)
	let arNameList = Object.keys(aspectratios)
	const [playbackRate, setPlaybackRate] = useState(settings.presets[MODE].player.speed)

	// UX show controlls on hover
  const [isHovering, setIsHovering] = useState(false)
	// display log, Transcript, WebVTT??
	const [hideOutputText, setHideOutputText] = useState(true)

	// loging
	const [logs, setLogs] = useState(()=> ['Configuring: ', ...arNameList, 'Playback speed: '+ playbackRate])
	function addLog(log){
		setLogs((l) => [...l, ` ${Date.now()} ${log}`])
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
	function seekSecondsPlay(n){
		addLog('seekSecondPlay: '+ n)
		runController(`seekTo(${fps * n})`)
		runController(`play()`)
	}

	function shuffleObject(obj){
		let newObj = {}
		var keys = Object.keys(obj)
			keys.sort(function(a,b){return Math.random()- 0.5;})
			keys.forEach(function(k) { newObj[k] = obj[k]});
		return newObj;
	}
	function rndPlayerOrder(){
		addLog('randomize player order')
		setAspectratios(shuffleObject(aspectratios))
	}
	function restorePlayerOrder(){
		addLog('restore player order')
		setAspectratios(settings.presets[MODE].vidSizes)
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
		<h2 className="title" style={{
			marginTop: '1em',
		}}>
			{title}
		</h2>
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
					opacity: (isHovering ? 1 : 0.618),
					width: '100%',
			}}>
				<Player
					component={Controller}
					className='controller'
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
						<button type="button" onClick={()=> seekSecondsPlay(3)}>
							play 3sec mark
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
					<span>
						<span>msc: </span>
						<button type="button" onClick={()=> rndPlayerOrder()}>
							RND player order
						</button>
						<button type="button" onClick={()=> restorePlayerOrder()}>
							reorder players
						</button>
						<button type="button"	onClick={()=> setHideOutputText(!hideOutputText)}>
							{ hideOutputText ? 'Show 📖' : 'Hide 📕' } log, Transcript, WebVTT
						</button>
					</span>
				</div>
			</div>

		{ hideOutputText
			? null
			: <>
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
				{/* //bug will overflow when manually moving srubbar; seems new in Remotion 3.0 */}
				{logs
					.slice(0)
					.reverse()
					.slice(0, 7)
					.map((l)=> <div key={l}>{l}</div>)
				}
			</div>
		</div>

		<div
			className='transcript'
			onMouseEnter={()=> setIsHovering(true)}
			onMouseLeave={()=> setIsHovering(false)}
			style={{
				opacity: (isHovering ? 1 : 0.618),
		}}>
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

		<div
			className='webvtt'
			onMouseEnter={()=> setIsHovering(true)}
			onMouseLeave={()=> setIsHovering(false)}
			style={{
				opacity: (isHovering ? 1 : 0.618),
		}}>
			<h4>WebVTT</h4>
			<p>
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_files">Web Video Text Tracks (captions)</a>, auto generated from the Transcript.
			</p>
			<textarea
				value={preparedTR.vtt}
			>
			</textarea>
    </div>
		</>}

			{ Object.entries(aspectratios).map( ([arName, vidSize],i)=>
				<div className='player' key={'playerdiv'+ i + arName}>
					<h6 style={{
						opacity: (isHovering ? 1 : 0.32),
					}}>
						{vidSize.info.ratio +' ~ '+ vidSize.info.about}
					</h6>
					<Player
						component={ArrangeSeries} //default
						inputProps={{
							transcript: preparedTR.tr,
						}}
						durationInFrames={durationInFrames}
						key={'remotion'+ i + arName}
						ref={playersRefs[arName]}
						compositionWidth={vidSize.dimention.w}
						compositionHeight={vidSize.dimention.h}
						fps={fps}
						playbackRate={playbackRate}
						style={{
							outline: `0.16rem dashed #777`,
						}}
					/>
				</div>
			)}

		</div>
	</>)
}
