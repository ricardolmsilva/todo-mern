import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import GlobalStyles, { StyledApp } from './assets/styles/globalStyles'

import Menu from './components/_layout/Menu'
import Routes from './components/_layout/Main'
import Footer from './components/_layout/Footer'

import { loadUser, setAuthToken } from './store/modules/auth/actions'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = ({ loadUser }) => {
	useEffect(() => {
		loadUser()
	}, [loadUser])

	return (
		<StyledApp className="App">
			<GlobalStyles />
			<div className="content">
				<BrowserRouter>
					<Menu />
					<Routes />
					<Footer />
				</BrowserRouter>
			</div>
		</StyledApp>
	)
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ loadUser, setAuthToken }, dispatch)

export default connect(
	null,
	mapDispatchToProps
)(App)
