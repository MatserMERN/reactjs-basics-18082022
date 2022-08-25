import { FETCH_STUDENTS } from "../action-types/student-action"

const initialState = {
    students: []
}

export const studentReducer = (state= initialState, {type, payload}) => {
    switch(type){
        case FETCH_STUDENTS : {
            return {...state, students: payload}
        }
        default: {
            return {...state}
        }
    }
}