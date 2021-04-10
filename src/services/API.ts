import axios from 'axios'

const baseURL = process.env.BASE_API_URL || "https://encore-bleszerd.vercel.app/api/v1/"

const API = axios.create({
    baseURL
})

export default API