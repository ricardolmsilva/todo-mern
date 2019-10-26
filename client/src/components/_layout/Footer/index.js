import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { StyledFooter } from './styles'
import { Icon } from '../../../assets/styles/globalStyles'
import { logout } from '../../../store/modules/auth/actions'

const Footer = ({ logout, isAuthenticated, loading }) => (
	<StyledFooter>
		<span className="credits">
			Design & Code by{' '}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/ricardolmsilva"
			>
				ricardolmsilva
			</a>
		</span>

		{isAuthenticated && !loading && (
			<Icon className="icon">
				<ion-icon name="power" onClick={logout}></ion-icon>
			</Icon>
		)}
	</StyledFooter>
)

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			logout
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)
