import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//	Styles
import { StyledTodoList } from './styles'

//	Components
import Spinner from '../../_layout/Spinner'

//	Actions
import {
	deleteTodo,
	updateTodo,
	fetchAll
} from '../../../store/modules/todo/actions'

const TodoList = ({ list, loading, updateTodo, deleteTodo, fetchAll }) => {
	function resize() {
		let parentHeight = document.querySelector('#main').clientHeight
		document.querySelector('.get-height').style.height =
			parentHeight - 40 + 'px'
	}

	useEffect(() => {
		fetchAll()
		window.addEventListener('resize', resize)
		resize()
		return () => window.removeEventListener('resize', resize)
	}, [fetchAll])

	return (
		<StyledTodoList className="get-height">
			{loading ? (
				<Spinner />
			) : (
				<ul>
					{list.map(todo => (
						<li className={todo.done ? 'done' : null}>
							<ion-icon
								name={
									todo.done ? 'checkmark-circle-outline' : 'radio-button-off'
								}
								onClick={() => updateTodo(todo)}
							/>

							<input
								type="text"
								className="text"
								value={todo.description}
								disabled
							/>

							<ion-icon name="close" onClick={() => deleteTodo(todo)} />
						</li>
					))}
				</ul>
			)}
		</StyledTodoList>
	)
}

const mapStateToProps = state => ({
	list: state.todo.list,
	loading: state.todo.loading
})
const mapDispatchToProps = dispatch =>
	bindActionCreators({ deleteTodo, updateTodo, fetchAll }, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
