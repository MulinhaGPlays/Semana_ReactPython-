import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json",
      },
})