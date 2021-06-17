import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Home'),
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/videoManage/VideoManage'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/userManage/UserManage'),
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/other/Page1'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
