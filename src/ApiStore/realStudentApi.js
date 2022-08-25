import axios from "axios";

export const realStudentAPI = axios.create({baseURL: "http://localhost:3001/api/"})