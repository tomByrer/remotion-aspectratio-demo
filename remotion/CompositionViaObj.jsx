import {Composition} from 'remotion';

import * as settings from "./helpers/settings"
import { prep } from './helpers/prep-transcript'
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { NiceComposition, SingleComposition } from './helpers/Helper'
import { TitleOutlined } from './segments/TitleOutlined'
import { transcripts } from './transcripts'

const defaultComp = 	[{
	id: 'insertend',
	transcript: 'test_TitleOutlined',
	overrides: {
		config:{
			vidKeys: ['SDTV','square'],
			// height: 100,
			// segmentList: [0, 1],
		},
		props:{
			// title: 'NiceComposition Test 2',
			style: {color: 'brown', backgroundColor:'linen', style: 'insert'},
		},
	}
}];

export const CompositionViaObj =(comps=[])=>{
	comps = (comps.length==0) ? comps : defaultComp
// let	comps[0] = defaultComp
	const idx = 0
console.log('CVO', comps)
	return (
		<NiceComposition
			idSuffix={'-' + comps[idx]?.id}
			transcript={transcripts[comps[idx]?.transcript]}
			overrides={comps[idx]?.overrides}
		/>
	);
};
