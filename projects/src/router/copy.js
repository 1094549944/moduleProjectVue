
            import Vue from 'vue'
            import Router from 'vue-router'
            Vue.use(Router)
            console.log('我走到了这里')
            var data = [{"path":"/home","name":"home","version":"v1","meta":{"title":"首页"}},{"path":"/about","name":"about","version":"v1","meta":{"title":"关于页面"}},{"path":"/inviteComission","name":"inviteComission","meta":{"title":"邀请"},"children":[{"path":"/inviteDetail","name":"inviteDetail","version":"v1","parent":"/inviteComission","meta":{"title":"邀请详情"}},{"path":"inviteList","name":"inviteList","version":"v1","parent":"/inviteComission","meta":{"title":"邀请列表"}}]}]
            console.log(data)
            function comFun(data){
              for(let value in data){
                if(data[value].hasOwnProperty('children')){
                  comFun(data[value].children)
                  console.log('children',data[value].children)
                  return
                } 
                console.log('data[value]',data[value])
                if(data[value].hasOwnProperty('parent')){
                  data[value].component= ()=>import(/* webpackChunkName: "data[value].name" */'../views'+data[value].parent+'/'+data[value].name+'/'+data[value].version+'/index.vue')
                }else{
                  data[value].component= ()=>import(/* webpackChunkName: "data[value].name" */'../views/'+data[value].name+'/'+data[value].version+'/index.vue')
                }
               
                
              }
            }
            comFun(data)
            export default new Router({
              mode: 'history',
              routes:[
                {
                  "path": "/home",
                  "name": "home",
                  "version": "v1",
               
                  "meta": {
                    "title": "首页"
                  }
                },
                {
                  "path": "/about",
                  "name": "about",
                  "version": "v1",
                
                  "meta": {
                    "title": "关于页面"
                  }
                },{
                  "path": "/inviteComission",
                  "name": "inviteComission",
                  "meta": {
                    "title": "邀请"
                  },
                  "component":()=>import('../views/Error/500.vue'),
                  "children":[{
                    "path": "inviteDetail",
                    "name": "inviteDetail",
                    "version": "v1",
                    "parent":"/inviteComission",
                    "meta": {
                      "title": "邀请详情"
                    },
                    "component":()=>import('../views/inviteComission/inviteDetail/v1/index.vue')
                  },{
                    "path": "inviteList",
                    "name": "inviteList",
                    "version": "v1",
                    "parent":"/inviteComission",
                    "meta": {
                      "title": "邀请列表"
                    },
                    "component":()=>import('../views/inviteComission/inviteList/v1/index.vue')
                  }]
                }
              ]
            })
            