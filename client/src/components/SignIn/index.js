import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as yup from 'yup'

//	Styles
import { Input, StyledForm } from '../../assets/styles/globalStyles'

//	Actions
import {
	signIn,
	setSignInInputValues,
	setSignInValidationErrors,
	cleanSignInForm
} from '../../store/modules/auth/actions'

const SignIn = ({
	isAuthenticated,
	username,
	password,
	errors,

	// Actions
	signIn,
	setSignInInputValues,
	setSignInValidationErrors,
	cleanSignInForm
}) => {
	useEffect(() => {
		return () => cleanSignInForm({})
	}, [])

	const schema = yup.object().shape({
		username: yup.string().required('Username is required'),
		password: yup.string().required('Password is required')
	})

	const handleChange = async e => {
		const { name, value } = e.target
		setSignInInputValues({ name, value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const isValid = await schema
			.validate({ username, password }, { abortEarly: false })
			.catch(err => {
				const e = err.inner.reduce((acc, cur) => {
					acc[cur.path] = cur.message
					return acc
				}, {})
				setSignInValidationErrors(e)
			})

		if (isValid !== undefined) {
			setSignInValidationErrors({})
			signIn({ username, password })
		}
	}

	if (isAuthenticated) {
		return <Redirect to={'/'} />
	}

	return (
		<StyledForm>
			<form onSubmit={handleSubmit}>
				<Input
					name="username"
					type="text"
					placeholder="Enter your username"
					value={username}
					onChange={handleChange}
				/>
				{errors.username && <span>{errors.username}</span>}
				<Input
					name="password"
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={handleChange}
				/>
				{errors.password && <span>{errors.password}</span>}
				{errors.msg && <div>{errors.msg}</div>}
				<input type="submit" value="Sign In" />
			</form>
		</StyledForm>
	)
}

const mapPropsToState = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	username: state.auth.form.username,
	password: state.auth.form.password,
	errors: state.auth.form.errors
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			signIn,
			setSignInInputValues,
			setSignInValidationErrors,
			cleanSignInForm
		},
		dispatch
	)

export default connect(
	mapPropsToState,
	mapDispatchToProps
)(SignIn)
