import axios from 'axios'
import { API_ENDPOINT, LoginPayload, LoginResponse } from './types'
import https from 'https'

const server = axios.create({
  baseURL: '/api',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
})

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await server.post<LoginResponse>(API_ENDPOINT.LOGIN, payload)
  return data
}