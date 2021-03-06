export const transcript = {
	info: {
		title: `Time-Framecount`,
		credits: `Tom Byrer`,
		v: 0.5,
	},
	config: {
		presetKey: 'PRODUCTION',
		vidKeys: ['square'],
	},
	sequence: [
		{
			layout: 'FrameCount',
			timeSrtSec: 0,
			timeEndSec: 10,
			// codeLeft: 'curFrame',
			// codeRight: 'curSecond',
			placeItems: 'center',
			digitCount: 3, //TODO: change this & fontVWRatio together
			fontVWRatio: 44,
			colorBack: 'hsl(27,65%,97%)',
			colorFront: 'darkorange',
			fadeText: 0.618,
		},
	]
}
