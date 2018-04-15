import { NavigationActions } from 'react-navigation'

const backAction = navigation => () => navigation.dispatch(NavigationActions.back())

const navigateTo = (navigation, route, params = {}) => {
	navigation.navigate(route, params)
}

const resetNavigateTo = (navigation, route) => {
	navigation.dispatch(
		NavigationActions.reset({
			index: 0,
			actions: [navigation.navigate(route)],
		})
	)
}

const resetNavigateToDashboard = (navigation, route) => {
	navigation.dispatch(
		NavigationActions.reset({
			index: 1,
			actions: [
				NavigationActions.navigate({ routeName: 'Dashboard' }),
				NavigationActions.navigate({ routeName: route }),
			],
		})
	)
}

export { backAction, navigateTo, resetNavigateTo, resetNavigateToDashboard }
