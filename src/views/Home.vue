<template>
  <div class="home">
    <h1>Home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},

  mounted() {
    console.log(this.$store.commit('SET_LANG', 'bn'));
  }
};
</script>
