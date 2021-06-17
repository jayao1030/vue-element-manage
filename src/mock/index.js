import Mock from 'mockjs'
import HomeApi from './home'

// 設置200-2000毫秒延時
Mock.setup({
  timeout: '200-2000',
})

// 首頁相關
// 攔截的是 /home/getData
Mock.mock(/\/home\/getData/, 'get', HomeApi.getHomeData)
