import axios from 'axios'

const BASE_URL = 'http://localhost:8008/api/v1' // `${process.env.API_ENDPOINT}/api/v1`

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
})
