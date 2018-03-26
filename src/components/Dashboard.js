import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { CustomButton, CustomLayout, CustomRouteActions } from './'

@connect(({ auth }) => ({ auth }))
export default class Dashboard extends Component {
	goTo = route => () => {
		CustomRouteActions.navigateTo(this.props.navigation, route)
	}

	render() {
		return (
			<CustomLayout winged style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text>Welcome!</Text>
				</View>

				<View style={{ height: 9 }} />
				<CustomButton
					type={'primary'}
					onPress={this.goTo('Auth')}
					title={'Logout Dashboard'}
				/>
				<View style={{ height: 9 }} />
			</CustomLayout>
		)
	}
}
