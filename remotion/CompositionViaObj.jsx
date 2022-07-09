import { NiceComposition, SingleComposition } from './helpers/Helper'
import { transcripts } from './transcripts'
import defaultReel from './reel'
// import { time_test } from './reels/time_test'

// let inputreels = defaultreels
// export const setreels=()=>{
// 	inputreels=time_test
// }

export const CompositionViaObj =(reels=[])=>{
	reels = (reels.length==0) ? reels : defaultReel
	return (<>{
		reels.map( (comp, idx)=>(
			<NiceComposition
				key={'nice'+idx}
				idSuffix={'-' + comp?.id}
				transcript={transcripts[comp.transcript]}
				overrides={comp?.overrides}
			/>
		) )
	}</>);
};
