const fs = require("fs");
const path = require("path");
const paramsData = require('../config/base.js')
const fileNameGet = path.basename(__filename, ".js");
// eslint-disable-next-line no-console
let data = {
  readFile: async () => {
    await fs.readFile(
      path.join(path.resolve(__dirname, "../"), `config/${fileNameGet}.js`),
      "utf-8",
      (err, params) => {
        if (!err) {
          params=JSON.parse(params)
          params=[].concat(params).concat(paramsData.paramsData.dataJson)
          // eslint-disable-next-line no-inner-declarations
          function changeData(data) {
            var str = `
            import Vue from 'vue'
            import Router from 'vue-router'
            Vue.use(Router)
            var data = ${ JSON.stringify(data)}
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
            `;
            return str;
          }
          fs.writeFile(
            path.join(path.resolve(__dirname, "../../"), "router/index.js"),
            changeData(params),
            err => {
              if (err) {
                throw err;
              }
            }
          );
        }
      }
    );
  }
};
module.exports = data.readFile();
