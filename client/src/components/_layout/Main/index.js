import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { StyledMain } from './styles'

import PrivateRoute from '../PrivateRouter'
import SignIn from '../../SignIn'
import SignUp from '../../SignUp'
import Todo from '../../Todo'
import About from '../About'

export default () => (
	<StyledMain id="main">
		<Switch>
			<Route exact path="/register" component={SignUp} />
			<Route exact path="/login" component={SignIn} />
			<PrivateRoute exact path="/" component={Todo} />
			<PrivateRoute exact path="/about" component={About} />
			<Redirect from="*" to="/" />
		</Switch>
	</StyledMain>
)
