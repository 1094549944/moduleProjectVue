const fs = require("fs");
const path = require("path");

const fileNameGet = path.basename(__filename, ".json");
// eslint-disable-next-line no-console
 console.log(fileNameGet);
 console.log("文件目录", path.resolve(__dirname, "../"));

let data = {
  readFile: async () => {
    console.log(
      "我读取的文件路径",
      path.join(path.resolve(__dirname, "../"), `config/${fileNameGet}`)
    );
    await fs.readFile(
      path.join(path.resolve(__dirname, "../"), `config/${fileNameGet}`),
      "utf-8",
      (err, params) => {
        console.log('\n\n------ begin:  ------')
          console.log('params',params)
          console.log('------ end:  ------\n\n')
        if (!err) {
          params=JSON.parse(params)
         
          // eslint-disable-next-line no-inner-declarations
          function changeData(data) {
            var str = `
            import Vue from 'vue'
            import Router from 'vue-router'
            Vue.use(Router)
            console.log('我走到了这里')
            var data = ${JSON.stringify(data)}
            console.log(data)
            function comFun(data){
              for(let value in data){
                data[value].component= ()=>import(/* webpackChunkName: "data[value].name" */'../views/'+data[value].name+'/'+data[value].version+'/index.vue')
              }
            }
            comFun(data)
            export default new Router({
              mode: 'history',
              routes:data
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
