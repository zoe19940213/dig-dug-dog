<template>
  <div id="app">
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main">
      <div id="side-bar">
        <SideBar v-if="!isLogin" 
                 @openModal="openModal" />
      </div>
      <div id="view-part">
        <router-view v-if="routerShow" />
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
    <div class="modal-mask" v-if="modalOpen"></div>
    <PostModal v-if="modalOpen"
               @closeModal="closeModal"
               @submitForm="submitForm"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/FooterBar";
import PostModal from "./components/PostModal";

export default {
  name: "App",
  data(){
    return{
      modalOpen: false,
      routerShow: true
    }
  },
  components: {
    NavBar,
    SideBar,
    Footer,
    PostModal,
  },
  methods: {
    openModal() {
      this.modalOpen = true
    },
    closeModal(){
      this.modalOpen = false
    },
    submitForm(){
      this.routerShow = false
      this.$nextTick(()=> {
        this.routerShow = true })
      this.closeModal()
    }
  },
  computed: {
    isLogin() {
      if (this.$route.name === "log-in" || this.$route.name === "sign-up") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
#nav-bar {
  position: fixed;
  top: 0;
}
#main {
  margin: auto;
  margin-top: 70px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
#side-bar {
  grid-column: 1/2;
}
#view-part {
  grid-column: 2/7;
}
.modal-mask {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d9d9d9;
  opacity: 0.5;
}
</style>
