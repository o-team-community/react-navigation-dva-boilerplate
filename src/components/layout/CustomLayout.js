import React from 'react'
import { Keyboard, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { CustomStatusBar } from '../'

export default class CustomLayout extends React.PureComponent {
	render() {
		const hideStatusBar = Platform.OS === 'ios' ? this.props.hideStatusBar : true

		if (this.props.winged) {
			return (
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View style={[{ backgroundColor: 'white' }, this.props.style]}>
						<View style={{ flex: 1, marginHorizontal: 8 }}>
							<CustomStatusBar hideStatusBar={hideStatusBar} />
							{this.props.children}
						</View>
					</View>
				</TouchableWithoutFeedback>
			)
		} else if (this.props.scrollableWinged) {
			return (
				<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
					<View style={{ flex: 1, marginHorizontal: 8 }}>
						<CustomStatusBar hideStatusBar={hideStatusBar} />
						{this.props.children}
					</View>
				</ScrollView>
			)
		} else if (this.props.scrollable) {
			return (
				<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
					<CustomStatusBar hideStatusBar={hideStatusBar} />
					{this.props.children}
				</ScrollView>
			)
		}
		return (
			<View style={[{ backgroundColor: 'white' }, this.props.style]}>
				<CustomStatusBar hideStatusBar={hideStatusBar} />
				{this.props.children}
			</View>
		)
	}
}
