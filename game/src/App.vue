<template>
  <div>
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang='scss'>
.app {
  color: red;
}
</style>