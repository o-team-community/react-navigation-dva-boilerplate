import React from 'react'
import { StatusBar } from 'react-native'

export default class HISD3StatusBar extends React.PureComponent {
	render() {
		return (
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={'#5691c8'}
				hidden={this.props.hideStatusBar}
			/>
		)
	}
}
