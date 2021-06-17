import axios from 'axios'

// 創建一個 axios 實體
const service = axios.create({
  // 請求超時時間
  timeout: 5000,
})

// 請求攔截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  }
)

service.interceptors.response.use(
  (response) => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  (err) => console(err)
)

export default service
