export const COLOR_1 = '#86A8E7';
export const COLOR_2 = '#91EAE4';

export const aRs = {
	'43:18': {
		info: {
			about: 'widescreen',
			ratio: '43/18',
			float: 2.388888888,
			uses: "modern cinema widescreen"
		},
		sizes: {
			'wqhdFifth': {w:688, h:288},
			'wqhdQuarter': {w:860, h:360},
			'ultrawideSmall': {w:1720, h:720},
			'wqhd': {w:3440, h:1440},
		},
	},
	'64:27': {
		info: {
			about: 'ultrawide',
			ratio: '64/27',
			float: 2.388888888,
			uses: 'Dashcam, Anamorphic 1.33x on 4:3'
		},
		sizes: {
			'wfhd': {w:2560, h:1080},
		},
	},
	'16:9': {
		info: {
			about: 'HDTV: common wide ratio',
			ratio: '16/9',
			float: 1.777777777,
		},
		sizes: {
			'240p': {w:426, h:240},
			'360p': {w:640, h:360},
			'480p': {w:854, h:480},
			'720p': {w:1280, h:720},
			'1080p': {w:1920, h:1080},
			'1440p': {w:2560, h:1440},
		},
	},
	'4:3': {
		info: {
			about: 'tube TV, art films, OG YouTube',
			ratio: '4/3',
			float: 1.333333333,
		},
		sizes: {
			'qvga': {w:320, h:240},
			'300w': {w:400, h:300},
			'360w': {w:480, h:360},
			'vga': {w:640, h:480},
			'svga': {w:800, h:600},
			'xga': {w:1024, h:768},
			'uxga': {w:1600, h:1200},
		}
	},
	'1:1': {
		info: {
			about: 'mixed-use soical media',
			ratio: '1/1',
			float: 1,
		},
		sizes: {
			'square360': {w:360, h:360},
			'square480': {w:480, h:480},
			'square480': {w:480, h:480},
			'squareHalf': {w:540, h:540},
			'squareTictok': {w:640, h:640},
			'squareTwitter': {w:720, h:720},
			'square': {w:1080, h:1080},
		},
	},
	'4:5': {
		info: {
			about: 'Instagram portrait',
			ratio: '4/5',
			float: 0.8,
		},
		sizes: {
			'feed360': {w:360, h:450},
			'feed480': {w:480, h:600},
			'feedHalf': {w:540, h:675},
			'feed': {w:1080, h:1350},
		},
	},
	'9:16': {
		info: {
			about: 'TicTok, Instagram',
			ratio: '9/16',
			float: 0.5625,
		},
		sizes: {
			'story360': {w:360, h:640},
			'story480': {w:480, h:854},
			'storyTwitter': {w:720, h:1280},
			'story': {w:1080, h:1920},
		},
	},
}

export const fps = {
	min: 16,  //silent film
	talk: 24,
	default: 30,
	highSpeed: 60,
}

export const presets = {
	//TODO individual fps per preset; some media hosts cap at 30
	SMALL: {
		fps: fps.min,
		vidSizes: {
			square: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['square360']},
			HDTV: {info: aRs['16:9'].info, dimention: aRs['16:9'].sizes['360p']},
			feed: {info: aRs['4:5'].info, dimention: aRs['4:5'].sizes['feed360']},
			story: {info: aRs['9:16'].info, dimention: aRs['9:16'].sizes['story360']},
			SDTV: {info: aRs['4:3'].info, dimention: aRs['4:3'].sizes['360w']},
			widescreen: {info: aRs['43:18'].info, dimention: aRs['43:18'].sizes['wqhdFifth']},
		},
		player: {
			speed: 1.5,
		},
	},
	DEVELOP: {
		fps: fps.talk,
		vidSizes: {
			square: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['square480']},
			HDTV: {info: aRs['16:9'].info, dimention: aRs['16:9'].sizes['480p']},
			feed: {info: aRs['4:5'].info, dimention: aRs['4:5'].sizes['feed480']},
			story: {info: aRs['9:16'].info, dimention: aRs['9:16'].sizes['story480']},
			SDTV: {info: aRs['4:3'].info, dimention: aRs['4:3'].sizes['vga']},
			widescreen: {info: aRs['43:18'].info, dimention: aRs['43:18'].sizes['wqhdQuarter']},
		},
		player: {
			speed: 1.5,
		},
	},
	PRODUCTION: {
		fps: fps.default,
		vidSizes: {
			square: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['squareTwitter']},
			HDTV: {info: aRs['16:9'].info, dimention: aRs['16:9'].sizes['1080p']},
			feed: {info: aRs['4:5'].info, dimention: aRs['4:5'].sizes['feed']},
			story: {info: aRs['9:16'].info, dimention: aRs['9:16'].sizes['storyTwitter']},
			SDTV: {info: aRs['4:3'].info, dimention: aRs['4:3'].sizes['xga']},
			widescreen: {info: aRs['43:18'].info, dimention: aRs['43:18'].sizes['ultrawideSmall']},
		},
		player: {
			speed: 1,
		},
	},
	// SPEEDS: {
	// 	vidSizes: {
	// 		square16: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['square360'], fps: 16},
	// 		square30: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['square360'], fps: 30},
	// 		square60: {info: aRs['1:1'].info, dimention: aRs['1:1'].sizes['square360'], fps: 60},
	// 	},
	// 	player: {
	// 		speed: 1.5,
	// 	},
	// },
}
