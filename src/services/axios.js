import axios from 'axios'

const BASE_URL = `${process.env.API_ENDPOINT}/api/v1`

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
})
