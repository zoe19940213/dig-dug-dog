<template>
  <div id="app">
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="main">
      <div class="side-bar">
        <SideBar v-if="isLogin" />
      </div>
      <div class="view-part">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    isLogin() {
      if (this.$route.name === "log-in" || this.$route.name === "sign-up") {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
.nav-bar{
  position: fixed;
  top: 0;
}
.main{
  margin: auto;
  margin-top: 80px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.side-bar{
  grid-column: 1/2;
}
.view-part{
  grid-column: 2/7;
}


</style>
