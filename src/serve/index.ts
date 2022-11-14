import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const hyRequest1 = new HYRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 10000,
  interceptors: {}
})

export default hyRequest
