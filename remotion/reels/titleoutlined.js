let test_TitleOutlined
export default test_TitleOutlined = [
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
	}
]
