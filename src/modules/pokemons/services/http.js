import axios from 'axios'
import { errorsMessage } from '../../../support/utils'

const http = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.response.use(
  (response) => response && response.data,
  (error) => {
    console.log(error)
    const { message, errors = [] } = error
    const errorMessage = errorsMessage(errors)
    return Promise.reject(new Error({ message: errorMessage || message }))
  }
)

export default http
