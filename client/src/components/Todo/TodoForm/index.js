import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//	Styles
import { StyledForm } from './styles'

//	Components
import { Icon } from '../../../assets/styles/globalStyles'

//	Actions
import {
	changeDescription,
	handleAdd
} from '../../../store/modules/todo/actions'

const TodoForm = ({
	loading,
	changeDescription,
	description,
	error,
	handleAdd
}) => {
	function handleKey(e) {
		e.key === 'Enter' && handleAdd(description)
	}

	return (
		<StyledForm>
			{!loading && (
				<>
					<div className="form">
						<input
							type="text"
							placeholder="Insert here your todo"
							onChange={changeDescription}
							onKeyPress={e => handleKey(e)}
							value={description}
						/>
						<Icon>
							<ion-icon name="add" onClick={() => handleAdd(description)} />
						</Icon>
					</div>

					<div className="error">{error !== '' && <span>{error}</span>}</div>
				</>
			)}
		</StyledForm>
	)
}

const mapStateToProps = state => ({
	description: state.todo.description,
	error: state.todo.error,
	loading: state.auth.loading
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			changeDescription,
			handleAdd
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoForm)
