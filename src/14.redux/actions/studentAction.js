import { FETCH_STUDENTS } from "../action-types/student-action"

export const studentAction = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}