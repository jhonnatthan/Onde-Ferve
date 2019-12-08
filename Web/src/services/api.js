import axios from "axios";

const api = axios.create({
    baseURL: "https://api.ondeferve.ga/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
