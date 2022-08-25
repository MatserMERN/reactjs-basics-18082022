import {combineReducers} from 'redux'
import { studentReducer } from "./studentReducer"

export const reducer = combineReducers({
    studentList: studentReducer
})