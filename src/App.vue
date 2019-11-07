<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/portfolio">About</router-link>
      <!-- <router-link :to="`/${$store.state.lang}${to}`" :title="label">
        <span>{{label}}</span>
      </router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['label', 'to']
};
</script>

<style lang="scss">
</style>
