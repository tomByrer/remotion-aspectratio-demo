const data = {
colors: {
	back: '#213099',
},
}
export const transcript = {
	info: {
		title: `Remotion-Advertisement`,
		credits: `Tom Byrer, based on Remotion & React logos by Johnny Burger.`,
		v: 0.5,
	},
	config: {
		presetKey: 'DEVELOP',
		vidKeys: ['square'],
	},
	sequence: [
		{
			layout: 'IntroCode',
			timeDurSecs: 4,
			title: 'What would you create if you could...',
			fontVWRatio: 3.5,
			colorBack: '#10131f',
			colorFront: '#d9d0c6',
		},
		{
			layout: 'ThreeRowsImgTitleSub',
			timeDurSecs: 8,
			logo: `<Logos.React />`,
			logoAnimation: `<Slide.SunriseRight />`,
			animatedLogo: `<Slide.SunriseRight><Logos.React /></Slide.SunriseRight>`,
			title: 'use ReactJS to build animations...',
			subtitle: 'Animate with web technologies you know & love.',
			colorBack: '#161b28',
			colorFront: '#e9e4d7',
		},
		{
			layout: 'ThreeRowsImgTitleSub',
			timeDurSecs: 8,
			logo: `<Logos.MovieCamera />`,
			logoAnimation: `<Slide.Right pcLeftStart={-81} />`,
			animatedLogo: `<Slide.Right pcLeftStart={-81}><Logos.MovieCamera /></Slide.Right>`,
			title: 'then capture them as a movie...',
			subtitle: 'Export a MP4 file or use the <Player>.',
			colorBack: data.colors.back,
			colorFront: '#d7d9df',
		},
		{
			layout: 'ThreeRowsImgTitleSub',
			timeDurSecs: 10,
			transition: `<Logos.Remotion use='transition'/>`,
			logo: `<Logos.Remotion />`,
			logoAnimation: `<Slide.Lift />`,
			animatedLogo: `<Logos.Remotion use='transition'/><Slide.Lift><Logos.Remotion /></Slide.Lift>`,
			title: 'with Remotion!',
			subtitle: 'Create videos programmatically in React.',
			colorBack: data.colors.back,
			colorFront: data.colors.back,
		},
	]
}
