import { Dimensions, PixelRatio } from 'react-native'

const windowSize = Dimensions.get('window')

const deviceWidthPercent = windowSize.width / 100
const deviceHeightPercent = windowSize.height / 100
const ratio = 10 // The ratio to compute across all devices

export function computeWidthRatio(size) {
	const dividedSize = deviceWidthPercent * (size / ratio)

	return PixelRatio.roundToNearestPixel(dividedSize)
}

export function computeHeightRatio(size) {
	const dividedSize = deviceHeightPercent * (size / ratio)

	return PixelRatio.roundToNearestPixel(dividedSize)
}

export function computePixelRatio(size) {
	return PixelRatio.roundToNearestPixel(size)
}
