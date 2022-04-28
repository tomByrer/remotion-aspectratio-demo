import * as useConvert from '../helpers/useConvert';

export function fromUpperLeft({
	heightInVH = 0,
	resize = 0,
	children,
}) {
	const scale = (100 + resize) * 0.01
	return (
		<div style={{
			transformOrigin: `center`,
			// breaks vertal (AspectRation < 0)
			// transform: `scale(${resize}) translate(${useConvert.cvw() - useConvert.cvh()}px)`,
			transform: `scale(${scale}) translateY(${useConvert.vh(heightInVH)}px)`,
		}}>
			{children}
		</div>
	)
}