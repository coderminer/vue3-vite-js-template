import { get } from './manager'

export const text = (params) => {
  return get('/api-text_yiyan', params)
}
