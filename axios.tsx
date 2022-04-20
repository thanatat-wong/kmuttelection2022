import axios from "axios"

const api = axios.create({
    baseURL: `http://4.tcp.ngrok.io:18115`, 
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api