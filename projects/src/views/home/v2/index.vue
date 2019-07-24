<template>
  <div>
    我是home2 的v2版本
    <div>
      <h2>图标类展示</h2>
      <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'square']" />
        </li>
        <li>
          <font-awesome-icon :icon="['far', 'square']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'accessible-icon']" />
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <font-awesome-icon icon="chess-knight" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" size="xs" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" size="lg" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" size="2x" />
          </li>
        </ul>
        <ul>
          <li>
            <font-awesome-icon icon="home" fixed-width />home
            <br />
          </li>
          <li>
            <font-awesome-icon icon="child" fixed-width />help
            <br />
          </li>
          <li>
            <font-awesome-icon icon="cog" fixed-width />settings
            <br />
          </li>
        </ul>
        <ul>
          <li>
            <font-awesome-icon icon="chess-knight" rotation="0" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" rotation="90" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" rotation="180" />
          </li>
          <li>
            <font-awesome-icon icon="chess-knight" rotation="270" />
          </li>
        </ul>
      </div>
      <div>参考文档：http://www.hangge.com/blog/cache/detail_2104.html</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
</style>