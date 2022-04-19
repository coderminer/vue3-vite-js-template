import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const service = axios.create({
  baseURL: baseURL,
  timeout: 10 * 60 * 1000
})

service.interceptors.request.use(
  (config) => {
    // 在请求之前配置header
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { status, statusText, data } = response
    if (status === 200) {
      return data
    } else {
      return Promise.reject(statusText)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
