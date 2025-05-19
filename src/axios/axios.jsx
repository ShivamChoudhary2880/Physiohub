// axios.interceptor.jsx
import axios from "axios";
const api_url = "https://physiohub.onrender.com/api/v1";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type':'application/json',
    },
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    // const accessToken = Cookies.get("token")
    const accessToken = localStorage.getItem("token")

    if (accessToken) {
        config.headers.Authorization = `Bearer${accessToken}`
    }

    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config
},
    (error) => {
        return Promise.reject(error);
    })

    export default api