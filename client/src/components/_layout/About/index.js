import React from 'react'

import { StyledAbout } from './styles'

import react from '../../../assets/images/react_logo.svg'
import redux from '../../../assets/images/redux_logo.svg'
import node from '../../../assets/images/node_logo.svg'
import mongoDB from '../../../assets/images/mongodb_logo.png'

export default () => (
	<StyledAbout id="about" className="get-height">
		<p>
			Here is my first web application developed in <strong>React</strong> and{' '}
			<strong>Node</strong> while I was studying that technologies. In client
			side in addition to React , I used <strong>Redux</strong> as a state
			manager and <strong>Mongo</strong> as a database. In Node API I used{' '}
			<strong>Express</strong> and <strong>Mongoose</strong>.
		</p>

		<h4>Used technologies:</h4>

		<div className="logos">
			<a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
				<img src={react} alt="React" />
			</a>

			<a href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
				<img src={redux} alt="Redux" />
			</a>

			<a
				href="https://nodejs.org/en/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={node} alt="Node" />
			</a>

			<a
				href="https://www.mongodb.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={mongoDB} alt="Mongo DB" />
			</a>
		</div>
	</StyledAbout>
)
