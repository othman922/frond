import axios from "axios";

const request = axios.create({
    baseURL: "https://blg-deploy-1.onrender.com"
});

export default request;