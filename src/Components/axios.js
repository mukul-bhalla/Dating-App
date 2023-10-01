import axios from 'axios'
const instance = axios.create({
    baseURL:"https://datingappbackend.onrender.com"
})
export default instance
