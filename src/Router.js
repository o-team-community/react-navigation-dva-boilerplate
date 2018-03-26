import React, { PureComponent } from 'react'
import { Animated, BackHandler, Easing } from 'react-native'
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import { Auth, CustomTitleBar, Dashboard } from './components'

const MainNavigator = StackNavigator(
	{
		Dashboard: {
			screen: Dashboard,
			navigationOptions: ({ navigation }) =>
				CustomTitleBar.standard(navigation, `Dashboard`, false),
		},
	},
	{
		headerMode: 'float',
		navigationOptions: {
			gesturesEnabled: false,
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 250,
				easing: Easing.inOut(Easing.poly(4)),
				timing: Animated.timing,
			},
		}),
	}
)

const ModalNavigator = StackNavigator(
	{
		Auth: { screen: Auth },
		Main: {
			screen: MainNavigator,
		},
	},
	{
		headerMode: 'none',
		mode: 'modal',
		navigationOptions: {
			gesturesEnabled: false,
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 250,
				easing: Easing.inOut(Easing.poly(4)),
				timing: Animated.timing,
			},
		}),
	}
)

function getCurrentScreen(navigationState) {
	if (!navigationState) {
		return null
	}
	const route = navigationState.routes[navigationState.index]
	if (route.routes) {
		return getCurrentScreen(route)
	}
	return route.routeName
}

@connect(({ router }) => ({ router }))
class Router extends PureComponent {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backHandle)
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
	}

	backHandle = () => {
		const currentScreen = getCurrentScreen(this.props.router)
		if (currentScreen === 'Auth') {
			return true
		}
		if (currentScreen !== 'Dashboard') {
			this.props.dispatch(NavigationActions.back())
			return true
		}
		return false
	}

	render() {
		const { dispatch, router } = this.props
		const navigation = addNavigationHelpers({
			dispatch,
			state: router,
			addListener: createReduxBoundAddListener('router'),
		})
		return <ModalNavigator navigation={navigation} />
	}
}

export function routerReducer(state, action = {}) {
	return ModalNavigator.router.getStateForAction(action, state)
}

export default Router
