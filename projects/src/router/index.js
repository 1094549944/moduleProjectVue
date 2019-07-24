
            import Vue from 'vue'
            import Router from 'vue-router'
            Vue.use(Router)
            var data = [{"path":"/","name":"home","version":"v2","meta":{"title":"首页"}},{"path":"/home","name":"home","version":"v2","meta":{"title":"首页"}},{"path":"/about","name":"about","version":"v1","meta":{"title":"关于页面"}},{"path":"/inviteComission","name":"inviteComission","version":"v1","meta":{"title":"邀请"},"children":[{"path":"inviteDetail","name":"inviteDetail","version":"v2","parent":"/inviteComission","parentVersion":"v1","meta":{"title":"邀请详情"}},{"path":"inviteList","name":"inviteList","version":"v2","parent":"/inviteComission","parentVersion":"v1","meta":{"title":"邀请列表"}}]},{"baseName":"Error","path":"/404","name":"error404","meta":{"title":"错误404"}},{"baseName":"Error","path":"/403","name":"error403","meta":{"title":"错误403"}},{"baseName":"Error","path":"/500","name":"error500","meta":{"title":"错误500"}}]
            console.log(data)
            function comFun(data) {
              for (let value in data) {
                if (data[value].hasOwnProperty('version')) {
                  // 有子路由，毁掉
                  if (data[value].hasOwnProperty('children')) {
                    data[value].component = resolve => require(['../views/' + data[value].name +'/'+data[value].version+ '/index.vue'], resolve)
                    comFun(data[value].children)
                    return
                  }
                  // 给children子路由 注册
                  if (data[value].hasOwnProperty('parent')) {
                    data[value].component = resolve => require(['../views' + data[value].parent + '/' +data[value].parentVersion+'/'+ data[value].name + '/' + data[value].version + '/index.vue'], resolve)
                  }
                   else {
                    data[value].component = resolve => require(['../views/' + data[value].name + '/' + data[value].version + '/index.vue'], resolve)
                  }
                } else {
                  console.log('我走了这里',value)   
                  data[value].component = resolve => require(['../views/' + data[value].baseName + '/' + data[value].name + '.vue'], resolve)
                }
            
              }
            }
            comFun(data)
            export default new Router({
              mode: 'history',
              scrollBehavior: () => ({
                y: 0
              }),
              routes: data
            })
            