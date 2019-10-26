import { combineReducers } from 'redux'
import promise from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'

//  Reducers
import todo from './modules/todo/reducer'
import auth from './modules/auth/reducer'
import user from './modules/users/reducer'
const rootReducers = combineReducers({ todo, auth, user })

//  DevTools Redux
const devTools =
	window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()

//  Declare Store
const store = applyMiddleware(promise)(createStore)(rootReducers, devTools)

export default store
