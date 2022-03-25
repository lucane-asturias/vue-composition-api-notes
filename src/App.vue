<template>
  <router-link to="/">Notes</router-link> | 
  <router-link to="/stats">Strts</router-link>

  <router-view></router-view>
</template>

<script>
export default {

  name: 'App',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
</style>
