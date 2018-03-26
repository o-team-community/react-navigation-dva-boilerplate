import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { CustomButton, CustomLayout, CustomRouteActions } from './'

@connect(({ auth }) => ({ auth }))
export default class Main extends Component {
	goTo = route => () => {
		CustomRouteActions.resetNavigateTo(this.props.navigation, route)
	}

	render() {
		return (
			<CustomLayout winged style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>Welcome to React Native</Text>
					<Text>+</Text>
					<Text>dva</Text>
					<Text>+</Text>
					<Text>React Navigation</Text>
				</View>

				<View style={{ height: 9 }} />
				<CustomButton
					type={'primary'}
					onPress={this.goTo('Dashboard')}
					title={'Login to Dashboard'}
				/>
				<View style={{ height: 9 }} />
			</CustomLayout>
		)
	}
}
