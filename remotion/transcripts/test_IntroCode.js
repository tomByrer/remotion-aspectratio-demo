const data = {
	colors: {
		back: '#39ff14',
	},
	time: {
		DurSecs: 4,
	},
}
export const transcript = {
	info: {
		title: `IntroCode-TEST`,
		credits: `Tom Byrer`,
		v: 0.0,
	},
	config: {
		presetKey: 'SMALL',
		vidKeys: ['square'],
	},
	sequence: [
		{
			layout: 'IntroCode',
			timeDurSecs: data.time.DurSecs,
			title: `Testing IntroCode for ${data.time.DurSecs} seconds`,

			fontVWRatio: 3.5,
			colorBack: '#10131f',
			colorFront: data.colors.back,
		},
	]
}
