let defaultComps
export default  defaultComps = [ //FIXME transcripts/warning
	{
		id: 'no-overrides',
		transcript: 'test_TitleOutlined',
	},{
		id: 'insertend',
		transcript: 'test_TitleOutlined',
		overrides: {
			config:{
				vidKeys: ['square'],
				height: 100,
				// segmentList: [0, 1],
			},
			props:{
				title: 'NiceComposition Test 2',
				style: {color: 'brown', backgroundColor:'linen', style: 'insert'},
			},
		}
	},{
		id:'tt',
		transcript:'time_test',
		overrides:{
			config:{
				presetKey:'SMALL', //FIX FPS only works in SMALL
				vidKeys: ['SDTV', 'square'],
				height: 200,
				// segments: 'all', // no segments=all
			},
			// props:{
			// 	style: {style: 'insert', color:'purple'},
			// },
		}
	}
]
