import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
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