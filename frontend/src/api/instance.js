import axios from 'axios'
import { ApiInstance } from '../config'

const instance = axios.create({
  baseURL: ApiInstance,
  headers: {
    accept: 'application/json',
  }
})
console.log(ApiInstance)
export default instance 