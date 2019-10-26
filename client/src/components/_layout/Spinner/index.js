import React from 'react'

import { StyledSpinner } from './styles'
import spinner from '../../../assets/images/spinner.gif'

export default () => (
	<StyledSpinner>
		<img src={spinner} alt="" />
	</StyledSpinner>
)
