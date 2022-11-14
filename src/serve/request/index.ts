import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 每个实例都添加拦截器
    this.instance.interceptors.request.use(
      config => {
        // loading/token
        console.log('全局请求成功')
        return config
      },
      err => {
        console.log('全局请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      res => {
        console.log('全局相响应成功拦截')
        return res
      },
      err => {
        console.log('全局响应失败拦截')
        return err
      }
    )
  }

  // 拦截器

  // 封装网络请求方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default HYRequest
