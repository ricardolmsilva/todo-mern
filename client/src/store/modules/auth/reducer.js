const INITIAL_STATE = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	form: {
		username: '',
		password: '',
		errors: {
			username: '',
			password: '',
			msg: ''
		}
	}
}

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case 'SIGN_IN_CHANGED': {
			return {
				...state,
				form: {
					...state.form,
					[payload.name]: payload.value
				}
			}
		}
		case 'SIGN_IN_VALIDATION_FAIL':
			return {
				...state,
				form: {
					...state.form,
					errors: payload
				}
			}
		case 'SIGN_IN_FAIL':
			localStorage.removeItem('token')
			return {
				...state,
				loading: false,
				form: {
					...state.form,
					errors: { ...state.errors, msg: payload.msg }
				}
			}
		case 'CLEAN_SIGN_UP_FORM':
			return {
				...state,
				form: INITIAL_STATE.form
			}
		case 'SIGN_UP_SUCCESS':
		case 'SIGN_IN_SUCCESS':
			localStorage.setItem('token', payload.token)
			return {
				...state,
				isAuthenticated: true,
				token: payload.token,
				loading: false,
				form: INITIAL_STATE.form
			}
		case 'USER_LOADED':
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				form: INITIAL_STATE.form
			}
		case 'AUTH_ERROR':
		case 'SIGN_UP_FAIL':
		case 'LOGOUT':
			localStorage.removeItem('token')
			return {
				...INITIAL_STATE,
				loading: false
			}

		default:
			return state
	}
}
