import { Dimensions } from 'react-native'

const windowSize = Dimensions.get('window')

const deviceWidthPercent = windowSize.width / 100
const deviceHeightPercent = windowSize.height / 100
const ratio = 8 // The ratio to compute across all devices

export function computeWidthRatio(size) {
	return deviceWidthPercent * (size / ratio)
}

export function computeHeightRatio(size) {
	return deviceHeightPercent * (size / ratio)
}
