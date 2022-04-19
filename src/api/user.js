import { post, get } from './manager'

export const info = (params) => get('/user/info', params)
export const login = (data) => post('/user/login', data)
