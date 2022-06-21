export const info = {
	title: `IntroCode-TEST`,
	credits: `Tom Byrer`,
	v: 0.0,
}
export const config = {
	preset: 'SMALL',
	aspectratios: ['square'],
}

const data = {
	colors: {
		back: '#39ff14',
	},
	time: {
		DurSecs: 2,
	}
}
export const sequence = [
	{
		layout: 'IntroCode',
		timeDurSecs: 2,
		title: `Testing IntroCode for ${data.time.DurSecs} seconds`,

		colorBack: data.colors.back,
		colorFront: '#d9d0c6',
		fontVWRatio: 3.5,
	},
]

/*
sequence:
[
  {
    layout: 'IntroCode',
    timeDurSecs: 2,
    title: 'Testing IntroCode for -2- seconds',
    colorBack: '#39ff14',
    colorFront: '#d9d0c6',
    fontVWRatio: 3.5,
    timeSrtSec: 0,
    timeSrtFrame: 0,
    timeEndSec: 2,
    timeEndFrame: 32,
    timeDurFrames: 33
  }
]

WebVTT - generated using TomByrer's prep-transcript

00:00:00.000 --> 00:00:02.000
- Testing IntroCode for -2- seconds
*/
