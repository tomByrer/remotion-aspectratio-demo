export const info = {
	about: `Framecount TEST file`,
	credits: `Tom Byrer`
}
export const config = {
	preset: 'SMALL',
	aspectratios: ['square'],
}

export const sequence = [
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
	},
]
