const data = {
	colors: {
		back: '#213099',
	},
}
export const transcript = {
	info: {
		title: `Mini-Remotion-Ad`,
		credits: `Tom Byrer, based on Remotion & React logo by Johnny Burger.`,
		v: 0.5,
	},
	config: {
		presetKey: 'SMALL',
		vidKeys: ['square'],
	},
	sequence: [
		{
			layout: 'IntroCode',
			timeDurSecs: 3.75,
			title: 'Ever wanted to "program" a video in any aspect ratio you wanted?',
			fontVWRatio: 3.5,
			colorBack: data.colors.back,
			colorFront: '#d9d0c6',
		},
		{
			layout: 'ThreeRowsImgTitleSub',
			timeDurSecs: 7.5,
			transition: `<Logos.Remotion use='transition'/>`,
			logo: `<Logos.Remotion />`,
			logoAnimation: `<Slide.Lift />`,
			animatedLogo: `<Logos.Remotion use='transition'/><Slide.Lift><Logos.Remotion /></Slide.Lift>`,
			title: 'You can with Remotion!',
			subtitle: 'Create videos programmatically in React.',
			colorBack: data.colors.back,
			colorFront: data.colors.back,
		},
	]
}
