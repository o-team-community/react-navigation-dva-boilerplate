export default {
	namespace: 'drawer',
	state: {
		routes: [],
	},
	reducers: {
		loadRoutes(state, { payload }) {
			return { ...state, ...payload }
		},
	},
	effects: {
		updateRoutes: [
			function*({ payload }, { put }) {
				yield put({ type: 'loadRoutes', payload })
			},
			{ type: 'takeLatest' },
		],
	},
}
