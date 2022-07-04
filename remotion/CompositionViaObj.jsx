import {Composition} from 'remotion';

import * as settings from "./helpers/settings"
import { prep } from './helpers/prep-transcript'
import { ArrangeSeries } from "./arrangements/ArrangeSeries"
import { NiceComposition, SingleComposition } from './helpers/Helper'
import { TitleOutlined } from './segments/TitleOutlined'
import { transcripts } from './transcripts'

const defaultComp = 	[ //FIXME transcripts/warning
	{
		id: 'insertend',
		transcript: 'test_TitleOutlined',
		overrides: {
			config:{
				vidKeys: ['square'],
				// height: 100,
				// segmentList: [0, 1],
			},
			props:{
				// title: 'NiceComposition Test 2',
				style: {color: 'brown', backgroundColor:'linen', style: 'insert'},
			},
		}
	},{
		id:'tt',
		transcript:'time_test',
		overrides:{
			config:{
				presetKey:'DEVELOP', //FIX FPS only works in SMALL
				// vidKeys: ['SDTV'],
				// height: 100,
				// segments: 'all',
			},
			// props:{
			// 	style: {style: 'insert', color:'purple'},
			// },
		}
	}
];

export const CompositionViaObj =(comps=[])=>{
	comps = (comps.length==0) ? comps : defaultComp
	return (<>{ comps.map( (comp, idx)=>(
		<NiceComposition
		 	key={'nice'+idx}
			idSuffix={'-' + comp?.id}
			transcript={transcripts[comp.transcript]}
			overrides={comp?.overrides}
		/>
	) )}
	</>);
};
