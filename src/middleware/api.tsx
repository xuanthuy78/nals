import axios from 'axios'
import { API_URL } from '../constants/ActionTypes'

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }),
  },
}
