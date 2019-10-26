import api from '../../../services/api'
import { setAuthToken } from '../auth/actions'

export const changeDescription = e => {
	if (e.target.value.length <= 40) {
		return {
			type: 'DESCRIPTION_CHANGED',
			payload: e.target.value
		}
	} else {
		return {
			type: 'DESCRIPTION_ERROR',
			payload: 'The description cannot be more than 40 characters'
		}
	}
}

export const fetchAll = async () => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	let payload = await api.get('/todos')
	return {
		type: 'FETCH_ALL',
		payload: payload.data
	}
}

export const handleAdd = async description => {
	if (description) {
		let payload = await api.post('/todos', {
			description
		})
		return {
			type: 'TODO_ADDED',
			payload: payload.data
		}
	} else {
		return {
			type: 'DESCRIPTION_ERROR',
			payload: 'The description cannot be empty'
		}
	}
}

export const deleteTodo = async todo => {
	await api.delete(`/todos/${todo._id}`)
	return {
		type: 'TODO_DELETED',
		payload: todo
	}
}

export const updateTodo = async todo => {
	let payload = await api.put(`/todos/${todo._id}`, {
		...todo,
		done: !todo.done
	})
	return {
		type: 'TODO_UPDATED',
		payload: payload.data
	}
}
