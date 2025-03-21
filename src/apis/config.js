import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.error(error);
        return Promise.reject(error);
    }
);