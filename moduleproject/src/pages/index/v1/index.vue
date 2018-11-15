<template>
  <div>
    我是index v1版本
    {{routes}}
  </div>
</template>

<script>
import routers from '../../../config/routes/a.js'
console.log(routers)
export default {
  name: 'index',
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = routers
  }
}
</script>

<style scoped>
</style>
