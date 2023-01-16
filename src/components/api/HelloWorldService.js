import { axiosBaseURL } from "./apiClient";


// export function GethelloWorldJson(){
//     return axios.get('http://localhost:8080/hello-world-json')
// }
export const GethelloWorldJson = () => axiosBaseURL.get('/hello-world-json')

export const GethelloWorldPathVariable = (userName) => axiosBaseURL.get(`/hello-world-json/path-variable/${userName}`)

export const getListToDos = (userName) => axiosBaseURL.get(`/users/${userName}/todos`)