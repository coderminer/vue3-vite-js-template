import service from './service'

export const get = (url, params) => {
  return service.request({ url: url, params: params, method: 'GET' })
}

export const post = (url, data) => {
  return service.request({ url: url, data: data, method: 'POST' })
}
