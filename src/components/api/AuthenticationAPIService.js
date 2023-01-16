import { axiosBaseURL } from "./apiClient"

export const authTokenService = (token) => axiosBaseURL.get('/baseauthtoken',
    {
        headers: {
            Authorization: token
        }
    })

export const authJWTTokenService = (username, password) => axiosBaseURL.post(`/authenticate`, { username, password })
        