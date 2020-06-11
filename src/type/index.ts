export type Mehtod =
| 'get'
| 'GET'

export interface AxiosRequestConfig {
  url?: string,
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}
