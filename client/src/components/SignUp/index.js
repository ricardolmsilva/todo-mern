import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as yup from 'yup'

//	Styles
import { Input, StyledForm } from '../../assets/styles/globalStyles'

//	Actions
import {
	signUp,
	setSignUpInputValues,
	setSignUpValidationErrors,
	cleanSignUpForm
} from '../../store/modules/users/actions'

const SignUp = ({
	isAuthenticated,
	username,
	password,
	passwordConfirmation,
	errors,

	// Actions
	signUp,
	setSignUpInputValues,
	setSignUpValidationErrors,
	cleanSignUpForm
}) => {
	useEffect(() => {
		return () => cleanSignUpForm({})
	}, [])

	const schema = yup.object().shape({
		username: yup.string().required('Username is required'),
		password: yup
			.string()
			.min(6, 'Password must have 6 chars minimum')
			.required('Password is required'),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords dont match')
	})

	const handleChange = async e => {
		const { name, value } = e.target
		setSignUpInputValues({ name, value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const isValid = await schema
			.validate(
				{ username, password, passwordConfirmation },
				{ abortEarly: false }
			)
			.catch(err => {
				const e = err.inner.reduce((acc, cur) => {
					acc[cur.path] = cur.message
					return acc
				}, {})
				setSignUpValidationErrors(e)
			})

		if (isValid !== undefined) {
			setSignUpValidationErrors({})
			signUp({ username, password, passwordConfirmation })
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
				<Input
					name="passwordConfirmation"
					type="password"
					placeholder="Enter your password"
					value={passwordConfirmation}
					onChange={handleChange}
				/>
				{errors.passwordConfirmation && (
					<span>{errors.passwordConfirmation}</span>
				)}
				{errors.msg && <div>{errors.msg}</div>}
				<input type="submit" value="Sign Up" />
			</form>
		</StyledForm>
	)
}

const mapPropsToState = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	username: state.user.form.username,
	password: state.user.form.password,
	passwordConfirmation: state.user.form.passwordConfirmation,
	errors: state.user.form.errors
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			signUp,
			setSignUpInputValues,
			setSignUpValidationErrors,
			cleanSignUpForm
		},
		dispatch
	)

export default connect(
	mapPropsToState,
	mapDispatchToProps
)(SignUp)
