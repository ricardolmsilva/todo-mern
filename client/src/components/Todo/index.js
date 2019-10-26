import React from 'react'

//	Styles
import { StyledTodo } from './styles'

//	Components
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default () => (
	<StyledTodo id="todo">
		<TodoForm id="todo-form" />
		<TodoList id="todo-list" />
	</StyledTodo>
)
