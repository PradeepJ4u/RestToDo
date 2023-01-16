import { createContext, useContext, useState } from "react";
import { axiosBaseURL } from "../../api/apiClient";
import { authJWTTokenService } from "../../api/AuthenticationAPIService";


//Create a Auth Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

     const [isAuthenticated, setAuthenticate] = useState(null)

     const [name, setName] = useState()

     const [authToken, setAuthToken] = useState(null)

//     async function login(userName, password) {

//         const basicAuthToken = 'Basic ' + window.btoa(userName + ":" + password)

//         try {

//             console.out('1')

//             const response = await authTokenService(basicAuthToken)

//             console.out('3')

//             if (response.status === 200) {
//                 setAuthenticate(true)
//                 setName(userName)
//                 setAuthToken(basicAuthToken)
//                 axiosBaseURL.interceptors.request.use(
//                     (config) => {
//                         config.headers.Authorization = basicAuthToken
//                         return config
//                     }
//                 )
//                 return true
//             } else {
//                 logout()
//                 return false
//             }
//         } catch {
//             logout()
//             return false
//         }
//     }

    /**
     * Download data from the specified URL.
     *
     * @async
     * @function downloadData
     * @param {string} url - The URL to download from.
     * @return {Promise<string>} The data from the URL.
     */
    async function login(username, password) {

        try {

            console.log('.5')

            const response = await authJWTTokenService(username, password)

            console.log('3.')

            console.log(response)

            if (response.status === 200) {

                const jwtToken = 'Bearer ' + response.data.token;

                setAuthenticate(true)
                setName(username)
                setAuthToken(jwtToken)
                axiosBaseURL.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch {
            console.log('Inside catch')
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticate(false)
        setAuthToken(null)
        setName(null)
        setName(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, name, login, logout, authToken }}>

            {children}

        </AuthContext.Provider>
    )
}