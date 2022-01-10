import axios from "axios";

//const axiosInstanceTeste = axios.

const axiosInstance = axios.create({
    baseURL: "http://localhost:8082",
});

export default axiosInstance;