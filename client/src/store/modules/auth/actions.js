import api from '../../../services/api'

export const setAuthToken = token => {
	if (token) {
		api.defaults.headers.common['x-auth-token'] = token
	} else {
		delete api.defaults.headers.common['x-auth-token']
	}
}

export const loadUser = async () => {
	try {
		const res = await api.get('/auth')
		return {
			type: 'USER_LOADED',
			payload: res.data
		}
	} catch (err) {
		return {
			type: 'AUTH_ERROR'
		}
	}
}

export const setSignInInputValues = async data => {
	return {
		type: 'SIGN_IN_CHANGED',
		payload: data
	}
}

export const setSignInValidationErrors = async errors => {
	return {
		type: 'SIGN_IN_VALIDATION_FAIL',
		payload: errors
	}
}

export const signIn = async ({ username, password }) => {
	try {
		const body = JSON.stringify({ username, password })
		const res = await api.post('auth', body)

		return {
			type: 'SIGN_IN_SUCCESS',
			payload: res.data
		}
	} catch (err) {
		return {
			type: 'SIGN_IN_FAIL',
			payload: err && err.response.data.error
		}
	}
}

export const cleanSignInForm = async () => ({ type: 'CLEAN_SIGN_IN_FORM' })

export const logout = () => ({ type: 'LOGOUT' })
