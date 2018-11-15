const index = () => import(/* webpackChunkName: "index" */ '@/pages/index/v1')
let routes = [
  {
    path: '/index',
    component: index
  }
]
export default routes
