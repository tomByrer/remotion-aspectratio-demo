const data = {
	colors: {
		back: '#39ff14',
	},
	time: {
		DurSecs: 2,
	}
}
export const transcript = {
	info: {
		title: `TEST-TitleOutlined`,
		credits: `Tom Byrer`,
		v: 0.0,
	},
	config: {
		presetKey: 'SMALL',
		vidKeys: ['square'],
	},
	sequence: [
		{
			layout: 'TitleOutlined',
			timeDurSecs: data.time.DurSecs,
			title: `${data.time.DurSecs}sec TitleOutlined test`,
		},
		{
			layout: 'TitleOutlined',
			timeDurSecs: data.time.DurSecs,
			title: `${data.time.DurSecs}sec TitleOutlined w/style`,
			style:{
				//DEFAULT color:'black,
				backgroundColor: data.colors.back,
				fontStyle: 'italic',
			},
		},
	]
}
