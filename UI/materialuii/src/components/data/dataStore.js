import {createStore} from 'redux'
import { combineReducers } from 'redux'
import dataReducer from './dataReducer.js'



const store = createStore(dataReducer)

export default store