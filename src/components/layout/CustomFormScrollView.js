import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class CustomFormScrollView extends PureComponent {
	render() {
		if (Platform.OS === 'ios') {
			return (
				<KeyboardAwareScrollView {...this.props}>
					{this.props.children}
				</KeyboardAwareScrollView>
			)
		}

		return (
			<KeyboardAvoidingView {...this.props}>
				<ScrollView refreshControl={this.props.refreshControl}>
					{this.props.children}
				</ScrollView>
			</KeyboardAvoidingView>
		)
	}
}
