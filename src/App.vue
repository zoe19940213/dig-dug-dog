<template>
  <div id="app">
    <NavBar />
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SideBar from './components/SideBar.vue'

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  },
};
</script>

<style>
</style>
