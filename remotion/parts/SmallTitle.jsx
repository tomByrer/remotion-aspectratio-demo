import {Subtitle} from '../parts/Subtitle'

export function SmallTitle({
	titleText='title text',
	frontColor='#e9e4d7',
	backColor='#161b2872',
}) {
	return (
		<div style={{flex: '100', backgroundColor: backColor}}>
			<Subtitle displayText={titleText} frontColor={frontColor} />
		</div>
	)
}
