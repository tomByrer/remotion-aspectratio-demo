export const info = {
	about: `Mini "Advertisement" for Remotion`,
	credits: `Tom Byrer, based on Remotion & React logos by Johnny Burger.`
}
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
		colorFront: colors.back,
	},
]
