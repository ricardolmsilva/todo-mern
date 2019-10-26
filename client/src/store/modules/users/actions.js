import api from '../../../services/api'

export const setSignUpInputValues = async data => {
	return {
		type: 'SIGN_UP_CHANGED',
		payload: data
	}
}

export const setSignUpValidationErrors = async errors => {
	return {
		type: 'SIGN_UP_VALIDATION_FAIL',
		payload: errors
	}
}

export const signUp = async ({ username, password, passwordConfirmation }) => {
	try {
		const body = JSON.stringify({ username, password, passwordConfirmation })
		const res = await api.post('/users', body)
		return {
			type: 'SIGN_UP_SUCCESS',
			payload: res.data
		}
	} catch (err) {
		return {
			type: 'SIGN_UP_FAIL',
			payload: err && err.response.data.error
		}
	}
}

export const cleanSignUpForm = async () => ({ type: 'CLEAN_SIGN_UP_FORM' })
