import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { computePixelRatio } from './DeviceRatio'

export default class CustomListItem extends PureComponent {
	render() {
		let colors = ['#468bd7', '#579fd7']
		let fontSize = computePixelRatio(17)
		let width = computePixelRatio(47)
		let height = computePixelRatio(47)

		switch (this.props.type) {
			case 'primary':
				colors = ['#468bd7', '#579fd7']
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
				colors = ['#468bd7', '#579fd7']
		}

		if (this.props.disabled) {
			colors = ['#d7d7d7', '#dadada']
		}

		switch (this.props.size) {
			case 'small':
				fontSize = computePixelRatio(13)
				break
			case 'large':
				fontSize = computePixelRatio(20)
				break
			default:
				fontSize = computePixelRatio(17)
		}

		switch (this.props.size) {
			case 'small':
				width = computePixelRatio(34)
				height = computePixelRatio(34)
				break
			case 'large':
				width = computePixelRatio(52)
				height = computePixelRatio(52)
				break
			default:
				width = computePixelRatio(47)
				height = computePixelRatio(47)
		}

		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={this.props.onPress}
				disabled={this.props.disabled}
				style={[
					{
						borderColor: '#d7d7d7',
						borderBottomWidth: computePixelRatio(StyleSheet.hairlineWidth),
					},
					this.props.style,
				]}
			>
				<LinearGradient
					colors={colors}
					end={{ x: 1, y: 0 }}
					style={[
						{
							height,
							backgroundColor: 'transparent',
							alignItems: 'flex-start',
						},
						this.props.style,
					]}
				>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							marginHorizontal: computePixelRatio(8),
							alignItems: 'center',
						}}
					>
						<Image
							style={{
								width: width - computePixelRatio(8),
								height: height - computePixelRatio(8),
							}}
						/>
						<View style={{ marginHorizontal: computePixelRatio(8) }} />
						<Text style={{ fontSize, fontWeight: 'bold', color: '#ffffff' }}>
							{this.props.title}
						</Text>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}
