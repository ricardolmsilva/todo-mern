const INITIAL_STATE = {
	name: 'sss',
	username: '',
	form: {
		username: '',
		password: '',
		passwordConfirmation: '',
		errors: {
			username: '',
			password: '',
			passwordConfirmation: '',
			msg: ''
		}
	}
}

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case 'SIGN_UP_CHANGED': {
			return {
				...state,
				form: {
					...state.form,
					[payload.name]: payload.value
				}
			}
		}
		case 'SIGN_UP_VALIDATION_FAIL':
			return {
				...state,
				form: {
					...state.form,
					errors: payload
				}
			}
		case 'SIGN_UP_FAIL':
			return {
				...state,
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
		case 'LOGIN_SUCCESS':
		case 'USER_LOADED':
			return {
				username: payload.username
			}
		case 'LOGOUT':
			return {
				...INITIAL_STATE
			}
		default:
			return state
	}
}
