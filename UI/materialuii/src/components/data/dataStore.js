import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './dataReducer.js'

const rootReducer = combineReducers({
    data: dataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store