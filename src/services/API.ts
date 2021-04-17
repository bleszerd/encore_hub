import axios from 'axios'

const baseURL = process.env.BASE_API_URL

if(!baseURL){
    throw new Error("You need to provide a BASE_API_URL as your environment variable.")
}

const API = axios.create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default API