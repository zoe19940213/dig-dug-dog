<template>
  <div id="app">
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main">
      <div id="side-bar">
        <SideBar v-if="isLogin" />
      </div>
      <div id="view-part">
        <router-view />
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar.vue";
import Footer from './components/FooterBar'

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    Footer
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
#nav-bar{
  position: fixed;
  top: 0;
}
#main{
  margin: auto;
  margin-top: 70px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
#side-bar{
  grid-column: 1/2;
}
#view-part{
  grid-column: 2/7;
}


</style>
