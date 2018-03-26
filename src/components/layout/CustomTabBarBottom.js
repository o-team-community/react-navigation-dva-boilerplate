import React from 'react'
import { Animated, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'

export default class CustomTabBarBottom extends React.PureComponent {
	static defaultProps = {
		activeTintColor: '#ffffff',
		inactiveTintColor: '#aaaaaa',
	}

	handleTabPress = index => {
		const { jumpToIndex, navigation } = this.props
		const currentIndex = navigation.state.index

		if (currentIndex === index) {
			const childRoute = navigation.state.routes[index]

			// eslint-disable-next-line no-prototype-builtins
			if (childRoute.hasOwnProperty('index') && childRoute.index > 0) {
				navigation.dispatch(NavigationActions.popToTop({ key: childRoute.key }))
			} else {
				// TODO: do something to scroll to top
			}
		} else {
			jumpToIndex(index)
		}
	}

	renderLabel = scene => {
		const { position, navigation, activeTintColor, inactiveTintColor, labelStyle } = this.props

		const { index } = scene
		const { routes } = navigation.state
		// Prepend '-1', so there are always at least 2 items in inputRange
		const inputRange = [-1, ...routes.map((x, i) => i)]
		const outputRange = inputRange.map(
			inputIndex => (inputIndex === index ? activeTintColor : inactiveTintColor)
		)
		const color = position.interpolate({
			inputRange,
			outputRange,
		})

		const tintColor = scene.focused ? activeTintColor : inactiveTintColor
		const label = this.props.getLabel({ ...scene, tintColor })

		return <Animated.Text style={[{ color }, labelStyle]}>{label}</Animated.Text>
	}

	render() {
		const { navigation, jumpToIndex, getOnPress } = this.props
		const { routes } = navigation.state
		const previousScene = routes[navigation.state.index]

		return (
			<Animated.View>
				<SafeAreaView style={{ height: 49, flexDirection: 'row' }}>
					{routes.map((route, index) => {
						const focused = index === navigation.state.index
						const scene = { route, index, focused }
						const onPress = getOnPress(previousScene, scene)

						return (
							<TouchableWithoutFeedback
								key={route.key}
								onPress={() =>
									onPress
										? onPress({
												previousScene,
												scene,
												jumpToIndex,
												defaultHandler: this.handleTabPress,
										  })
										: this.handleTabPress(index)
								}
							>
								<LinearGradient
									colors={['#457fca', '#5792ca']}
									end={{ x: 1, y: 0 }}
									style={[
										{
											flex: 1,
											backgroundColor: 'transparent',
											alignItems: 'center',
											justifyContent: 'center',
										},
									]}
								>
									<Animated.View>{this.renderLabel(scene)}</Animated.View>
								</LinearGradient>
							</TouchableWithoutFeedback>
						)
					})}
				</SafeAreaView>
			</Animated.View>
		)
	}
}
