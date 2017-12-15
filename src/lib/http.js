import axios from 'axios'
import config from '../config'

const { api } = config
const token = sessionStorage.getItem('token')

const http = axios.create({
  baseURL: api.base,
  headers: {'Authentication': `Bearer ${token}`}
})

http.all = axios.all
http.spread = axios.spread
export default http
