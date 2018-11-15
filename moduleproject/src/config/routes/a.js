import routes from './base'
// const index = () => import(/* webpackChunkName: "index" */ '@/pages/index/v2')
// const Rules = () =>
//   import(/* webpackChunkName: "rules" */ '../../pages/rules/v1/index')

let params = [
  {
    chunk: () =>
      import(/* webpackChunkName: "index" */ '../../pages/index/v2/index'),
    name: 'index',
    path: '/index'
  },
  {
    chunk: () =>
      import(/* webpackChunkName: "rules" */ '../../pages/rules/v1/index'),
    name: 'rules',
    path: '/rules'
  }
]
let add = []
for (let value in params) {
  let obj = {
    path: params[value].path,
    component: params[value].chunk
  }
  add.push(obj)
}

export default add.concat(routes)
