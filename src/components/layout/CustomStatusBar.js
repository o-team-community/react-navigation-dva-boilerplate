import React from 'react'
import { StatusBar } from 'react-native'

export default class CustomStatusBar extends React.PureComponent {
	render() {
		return (
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={'#5792ca'}
				hidden={this.props.hideStatusBar}
			/>
		)
	}
}
