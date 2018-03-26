import React from 'react'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import dva from './utils/dva'
import Router from './Router'

import authModel from './models/auth'
import routerModel from './models/router'

const app = dva({
	initialState: {},
	models: [authModel, routerModel],
	onAction: createReactNavigationReduxMiddleware('router', state => state.router),
	onError(error) {
		console.log('error onError', error)
	},
})

const App = app.start(<Router />)

export default App
