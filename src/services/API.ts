import axios from 'axios'

const baseURL = process.env.BASE_API_URL || "http://localhost:3000/api/v1"

const API = axios.create({
    baseURL
})

export default API