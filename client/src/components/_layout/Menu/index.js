import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { StyledMenu } from './styles'

const Navbar = ({ isAuthenticated, loading }) => {
	const [active, setActive] = useState()

	useEffect(() => {
		let a = window.location.pathname
		a !== active && setActive(a)
	}, [window.location.pathname])

	const authMenu = (
		<ul className="nav">
			<li className="nav-item">
				<Link to="/" className={'nav-link ' + (active === '/' && 'active')}>
					TODO
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/about"
					className={'nav-link ' + (active === '/about' && 'active')}
				>
					ABOUT
				</Link>
			</li>
		</ul>
	)
	const guessMenu = (
		<ul className="nav">
			<li className="nav-item">
				<Link
					to="/login"
					className={'nav-link ' + (active === '/login' && 'active')}
				>
					SIGN IN
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/register"
					className={'nav-link ' + (active === '/register' && 'active')}
				>
					SIGN UP
				</Link>
			</li>
		</ul>
	)

	return (
		<StyledMenu>
			{!loading && <>{isAuthenticated ? authMenu : guessMenu}</>}
		</StyledMenu>
	)
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
})

export default connect(mapStateToProps)(withRouter(Navbar))
