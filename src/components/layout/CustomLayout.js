import React from 'react'
import {
	Keyboard,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	View,
	SafeAreaView,
} from 'react-native'
import { CustomStatusBar } from './'
import { computePixelRatio } from './DeviceRatio'

export default class CustomLayout extends React.PureComponent {
	render() {
		const hideStatusBar = Platform.OS === 'ios' ? this.props.hideStatusBar : true

		if (this.props.winged) {
			return (
				<SafeAreaView style={{ flex: 1 }}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
						<View style={{ flex: 1, backgroundColor: 'white' }}>
							<View style={{ flex: 1, marginHorizontal: computePixelRatio(8) }}>
								<CustomStatusBar hideStatusBar={hideStatusBar} />
								{this.props.children}
							</View>
						</View>
					</TouchableWithoutFeedback>
				</SafeAreaView>
			)
		} else if (this.props.scrollableWinged) {
			return (
				<SafeAreaView style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
						<View style={{ flex: 1, marginHorizontal: computePixelRatio(8) }}>
							<CustomStatusBar hideStatusBar={hideStatusBar} />
							{this.props.children}
						</View>
					</ScrollView>
				</SafeAreaView>
			)
		} else if (this.props.scrollable) {
			return (
				<SafeAreaView style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
						<CustomStatusBar hideStatusBar={hideStatusBar} />
						{this.props.children}
					</ScrollView>
				</SafeAreaView>
			)
		} else if (this.props.noSafeArea) {
			return (
				<View style={{ flex: 1, backgroundColor: 'white' }}>
					<CustomStatusBar hideStatusBar={hideStatusBar} />
					{this.props.children}
				</View>
			)
		}

		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, backgroundColor: 'white' }}>
					<CustomStatusBar hideStatusBar={hideStatusBar} />
					{this.props.children}
				</View>
			</SafeAreaView>
		)
	}
}
