import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const backAction = navigation => () => navigation.goBack()

const navigateTo = (navigation, route) => {
	navigation.navigate(route)
}

const resetNavigateTo = (navigation, route) => {
	navigation.dispatch(
		NavigationActions.reset({
			index: 0,
			actions: [navigation.navigate(route)],
		})
	)
}

@connect(({ auth }) => ({ auth }))
class LogoutButton extends Component {
	onLogout = () => {
		Alert.alert('Confirmation', 'Please Confirm to Logout', [
			{
				text: 'Confirm',
				onPress: () => {
					this.props.dispatch({ type: 'auth/logout' })

					this.props.navigation.dispatch(
						NavigationActions.reset({
							index: 0,
							actions: [this.props.navigation.navigate('Auth')],
						})
					)
				},
			},
			{ text: 'Cancel', onPress: () => {}, style: 'cancel' },
		])
	}

	render() {
		return (
			<TouchableOpacity onPress={this.onLogout}>
				<View style={{ marginHorizontal: 8 }}>
					<Text style={{ fontSize: 28 }}>Logout</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export { backAction, navigateTo, resetNavigateTo, LogoutButton }
