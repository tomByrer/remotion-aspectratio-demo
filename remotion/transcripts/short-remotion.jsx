const colors = {
	back: '#39ff14'
}

export const transcriptShortRemotion = [
	{
		layout: 'IntroCode',
		timeDurSecs: 3.75,
		title: 'Ever wanted to "program" a video in any aspect ratio you wanted?',
		fontVWRatio: 3.5,
		colorBack: colors.back,
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
		colorBack: colors.back,
		colorFront: '#39ff14',
	},
]
