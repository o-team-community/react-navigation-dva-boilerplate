import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { CustomRouteActions } from './'

// eslint-disable-next-line import/prefer-default-export
export const standard = (navigation, title = '', showBackButton = true) => {
	const header = (
		<LinearGradient
			colors={['#457fca', '#5691c8']}
			end={{ x: 1, y: 0 }}
			style={{
				backgroundColor: 'transparent',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					height: 47,
					marginTop: Platform.OS === 'ios' ? 20 : 0,
				}}
			>
				{showBackButton ? (
					<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<View style={{ height: 9 }} />
						<TouchableOpacity onPress={CustomRouteActions.backAction(navigation)}>
							<View style={{ marginHorizontal: 8 }}>
								<Text style={{ fontSize: 28 }}>Back</Text>
							</View>
						</TouchableOpacity>
						<View style={{ height: 9 }} />
					</View>
				) : (
					<View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
						<View style={{ height: 9 }} />
						<TouchableOpacity>
							<View style={{ marginHorizontal: 8 }}>
								<Text style={{ color: 'transparent', fontSize: 28 }}>Back</Text>
							</View>
						</TouchableOpacity>
						<View style={{ height: 9 }} />
					</View>
				)}
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ height: 9 }} />
					<Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' }}>
						{title}
					</Text>
					<View style={{ height: 9 }} />
				</View>
				<View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
					<View style={{ height: 9 }} />
					<CustomRouteActions.LogoutButton navigation={navigation} />
					<View style={{ height: 9 }} />
				</View>
			</View>
		</LinearGradient>
	)

	return {
		header,
		gesturesEnabled: false,
	}
}
