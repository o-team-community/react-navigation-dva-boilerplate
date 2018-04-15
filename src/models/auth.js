/* eslint-disable no-unused-vars */
export default {
	namespace: 'auth',
	state: {
		account: {},
		isAuthenticated: false,
		loading: false,
	},
	reducers: {
		accountReceived(state, { payload }) {
			return {
				...state,
				...payload,
				isAuthenticated: true,
			}
		},
		loadStart(state, { payload }) {
			return { ...state, ...payload, loading: true }
		},
		loadEnd(state, { payload }) {
			return { ...state, ...payload, loading: false }
		},
	},
	effects: {
		login: [
			function*({ payload }, { call, put }) {
				yield put({ type: 'loadStart' })

				try {
					const response = yield payload // TODO put your login call here

					yield put({ type: 'loginSuccess', response })
				} catch (error) {
					// TODO put your error here
				}

				yield put({ type: 'loadEnd' })
			},
			{ type: 'takeLatest' },
		],
		loginSuccess: [
			function*({ payload }, { call, put }) {
				try {
					const response = yield // TODO put your loginSuccess call here

					yield put({ type: 'accountReceived', payload: { account: response.data } })
				} catch (error) {
					// TODO put your error here
				}
			},
			{ type: 'takeLatest' },
		],
		logout: [
			function*({ payload }, { call, put }) {
				yield put({ type: 'loadStart' })

				// TODO put your logout script here

				yield put({ type: 'loadEnd' })
			},
			{ type: 'takeLatest' },
		],
	},
}
