import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { computeWidthRatio } from '../../utils/DeviceRatio'

export default class CustomButton extends PureComponent {
	render() {
		let colors = ['#457fca', '#5691c8']
		let fontSize = 17
		let height = 47

		switch (this.props.type) {
			case 'primary':
				colors = ['#457fca', '#5792ca']
				break
			case 'success':
				colors = ['#56ab2f', '#7aab56']
				break
			case 'danger':
				colors = ['#d66d75', '#d6897b']
				break
			case 'warning':
				colors = ['#f2994a', '#f2c94c']
				break
			default:
				colors = ['#457fca', '#5792ca']
		}

		if (this.props.disabled) {
			colors = ['#DBDBDB', '#e1e1e1']
		}

		switch (this.props.size) {
			case 'small':
				fontSize = 13
				break
			case 'large':
				fontSize = 20
				break
			default:
				fontSize = 17
		}

		switch (this.props.size) {
			case 'small':
				height = 34
				break
			case 'large':
				height = 52
				break
			default:
				height = 47
		}

		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={this.props.onPress}
				disabled={this.props.disabled}
				style={this.props.style}
			>
				<LinearGradient
					colors={colors}
					end={{ x: 1, y: 0 }}
					style={[
						{
							height,
							backgroundColor: 'transparent',
							alignItems: 'center',
							justifyContent: 'center',
							padding: computeWidthRatio(20),
							borderRadius: computeWidthRatio(20),
						},
						this.props.style,
					]}
				>
					<Text style={{ fontSize, fontWeight: 'bold', color: '#FFFFFF' }}>
						{this.props.title}
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}
