import React, { Component } from 'react'
import { Alert, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import _ from 'lodash'

import { CustomLayout, CustomListItem, CustomRouteActions, CustomTitleBar } from './'

const routes = {
	defaultMenu: [{ routeName: 'Dashboard', title: 'Dashboard' }],
}

@connect(({ drawer }) => ({ drawer }))
export default class DrawerMenu extends Component {
	componentDidUpdate() {
		const drawerRoute = this.props.navigation.state.routes
		const mainRoute = drawerRoute[drawerRoute.length - 1].routes
		const componentRoute = mainRoute[mainRoute.length - 1].routeName

		switch (componentRoute) {
			case 'Dashboard':
				this.updateRoutes(routes.defaultMenu)
				break
			default:
				this.updateRoutes(routes.defaultMenu)
		}
	}

	onLogout = () => {
		Alert.alert('Confirmation', 'Please Confirm to Logout', [
			{
				text: 'Confirm',
				onPress: () => {
					this.props.dispatch({
						type: 'auth/logout',
					})

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

	updateRoutes = items => {
		if (this.timeoutHandle) clearTimeout(this.timeoutHandle)

		this.timeoutHandle = setTimeout(() => {
			if (this.props.drawer.routes !== items) {
				this.props.dispatch({
					type: 'drawer/updateRoutes',
					payload: {
						routes: items,
					},
				})
			}
			this.timeoutHandle = undefined
		}, 100)
	}

	goTo = route => () => {
		CustomRouteActions.navigateTo(this.props.navigation, route)
	}

	renderMenuItems = () => {
		const menuList = []
		const drawerRoute = this.props.navigation.state.routes
		const mainRoute = drawerRoute[drawerRoute.length - 1].routes
		const componentRoute = mainRoute[mainRoute.length - 1].routeName

		_.map(this.props.drawer.routes, item => {
			menuList.push(
				<CustomListItem
					key={item.routeName}
					type={'primary'}
					onPress={this.goTo(item.routeName)}
					disabled={componentRoute === item.routeName}
					title={item.title}
				/>
			)
		})

		return menuList
	}

	render() {
		return (
			<CustomLayout noSafeArea>
				{CustomTitleBar.drawer('Menu')}
				<ScrollView style={{ flex: 1 }}>
					{this.renderMenuItems()}
					<CustomListItem type={'primary'} onPress={this.onLogout} title={'Logout'} />
				</ScrollView>
			</CustomLayout>
		)
	}
}
