[{
  "path": "/",
  "name": "home",
  "version": "v2",

  "meta": {
    "title": "首页"
  }
},
  {
    "path": "/home",
    "name": "home",
    "version": "v2",
 
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
    "version": "v1",
    "meta": {
      "title": "邀请"
    },
    "children":[{
      "path": "inviteDetail",
      "name": "inviteDetail",
      "version": "v2",
      "parent":"/inviteComission",
      "parentVersion":"v1",
      "meta": {
        "title": "邀请详情"
      }
    },{
      "path": "inviteList",
      "name": "inviteList",
      "version": "v2",
      "parent":"/inviteComission",
      "parentVersion":"v1",
      "meta": {
        "title": "邀请列表"
      }
    }]
  }
]