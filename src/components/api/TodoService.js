import { axiosBaseURL } from "./apiClient";



export const retriveAllTodoForUser = (userName, authToken) => axiosBaseURL.get(`/users/${userName}/todos`, authToken)

export const deleteUserById = (userName, id) => axiosBaseURL.delete(`/users/${userName}/todo/${id}`)

export const retriveTodoById = (userName, id) => axiosBaseURL.get(`/users/${userName}/todo/${id}`)

export const updateTodoById = (userName, id, todo) => axiosBaseURL.put(`/users/${userName}/todo/${id}`, todo)

export const addTodoById = (userName, todo) => axiosBaseURL.post(`/users/${userName}/todo`, todo)

