import axios from "axios"

export const fakeProductAPI = axios.create({baseURL: "https://fakestoreapi.com"})