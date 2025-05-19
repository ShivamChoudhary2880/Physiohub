//utils/apiCaller.js
import axios from 'axios';

const apiCaller = async (method, url, isToken, data = null, params = null) => {
    try {
        const token = localStorage.getItem('accessToken');

        const headers = {
            'Content-Type': 'application/json',
        };
        if (isToken == true) {
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }
        const response = await axios({
            method,
            url: `https://dummyjson.com/${url}`,
            data,
            params,
            headers,
        });

        return { success: true, data: response.data };
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            error?.message ||
            'Something went wrong';
        
        return { success: false, error: message };
    }
};


export default apiCaller;