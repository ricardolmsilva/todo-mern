const INITIAL_STATE = {
	description: '',
	error: null,
	list: [],
	loading: true
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return { ...state, loading: false, list: action.payload }
		case 'DESCRIPTION_CHANGED':
			return { ...state, error: '', description: action.payload }
		case 'DESCRIPTION_ERROR':
			return { ...state, error: action.payload }
		case 'TODO_ADDED':
			return {
				...state,
				description: '',
				error: '',
				list: [action.payload, ...state.list]
			}
		case 'TODO_DELETED':
			return {
				...state,
				list: state.list.filter(t => t._id !== action.payload._id)
			}
		case 'TODO_UPDATED':
			return {
				...state,
				list: state.list.map(todo =>
					todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
				)
			}
		case 'LOGOUT':
			return {
				...INITIAL_STATE,
				loading: false
			}
		default:
			return state
	}
}
