import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { CustomRouteActions } from './'
import { computePixelRatio } from './DeviceRatio'

export const standard = (navigation, title = '', showBackButton = true) => {
	const header = (
		<LinearGradient
			colors={['#457fca', '#5792ca']}
			end={{ x: 1, y: 0 }}
			style={{
				backgroundColor: 'transparent',
				borderColor: '#d7d7d7',
				borderBottomWidth: computePixelRatio(StyleSheet.hairlineWidth),
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					height: computePixelRatio(47),
					marginTop: Platform.OS === 'ios' ? computePixelRatio(20) : 0,
				}}
			>
				{showBackButton ? (
					<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<View style={{ height: computePixelRatio(9) }} />
						<TouchableOpacity onPress={CustomRouteActions.backAction(navigation)}>
							<View style={{ marginHorizontal: computePixelRatio(8) }}>
								<Text style={{ fontSize: computePixelRatio(28) }}>Back</Text>
							</View>
						</TouchableOpacity>
						<View style={{ height: computePixelRatio(9) }} />
					</View>
				) : (
					<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<View style={{ height: computePixelRatio(9) }} />
						<TouchableOpacity>
							<View style={{ marginHorizontal: computePixelRatio(8) }}>
								<Text style={{ fontSize: computePixelRatio(28) }}>Back</Text>
							</View>
						</TouchableOpacity>
						<View style={{ height: computePixelRatio(9) }} />
					</View>
				)}
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ height: computePixelRatio(9) }} />
					<Text
						style={{
							fontSize: computePixelRatio(22),
							fontWeight: 'bold',
							color: '#ffffff',
						}}
					>
						{title}
					</Text>
					<View style={{ height: computePixelRatio(9) }} />
				</View>
				<View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
					<View style={{ height: computePixelRatio(9) }} />
					<TouchableOpacity
						onPress={() => navigation.dispatch(navigation.navigate('DrawerOpen'))}
					>
						<View style={{ marginHorizontal: computePixelRatio(8) }}>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(2),
									backgroundColor: 'transparent',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(4),
									backgroundColor: '#ffffff',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(4),
									backgroundColor: 'transparent',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(4),
									backgroundColor: '#ffffff',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(4),
									backgroundColor: 'transparent',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(4),
									backgroundColor: '#ffffff',
								}}
							/>
							<View
								style={{
									width: computePixelRatio(28),
									height: computePixelRatio(2),
									backgroundColor: 'transparent',
								}}
							/>
						</View>
					</TouchableOpacity>
					<View style={{ height: computePixelRatio(9) }} />
				</View>
			</View>
		</LinearGradient>
	)

	return {
		header,
		gesturesEnabled: false,
	}
}

export const drawer = (title = '') => (
	<LinearGradient
		colors={['#457fca', '#5792ca']}
		end={{ x: 1, y: 0 }}
		style={{
			backgroundColor: 'transparent',
			borderColor: '#d7d7d7',
			borderBottomWidth: computePixelRatio(StyleSheet.hairlineWidth),
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				height: computePixelRatio(47),
				marginTop: Platform.OS === 'ios' ? computePixelRatio(20) : 0,
			}}
		>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View style={{ height: computePixelRatio(9) }} />
				<Text
					style={{
						fontSize: computePixelRatio(22),
						fontWeight: 'bold',
						color: '#ffffff',
					}}
				>
					{title}
				</Text>
				<View style={{ height: computePixelRatio(9) }} />
			</View>
		</View>
	</LinearGradient>
)
