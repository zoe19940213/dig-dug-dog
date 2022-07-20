<template>
  <div class="nav-bar">
    <h1 @click.prevent.stop="toHomePage"
      class="nav-bar__title">Dig Dug Dog</h1>
    <div class="nav-bar__functions">
      <div class="nav-bar__functions__search">
        <button ><font-awesome-icon class="search icon" icon="fa-solid fa-magnifying-glass" /></button>
        <input type="text" v-model="keywords">
      </div>
      <div class="nav-bar__btns">
        <button @click.prevent.stop="toAboutPage">
            <font-awesome-icon class="paw icon" icon="fa-solid fa-paw"/></button>
        <button @click.prevent.stop="toSettingPage">
            <font-awesome-icon class="user icon" icon="fa-solid fa-user" /></button>
        <button @click.passive.stop = "logOut"
          ><font-awesome-icon class="log icon" icon="fa-solid fa-arrow-right-from-bracket" /></button>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      keywords: ''
    }
  },
  methods:{
    toHomePage(){
      this.$router.push('/home')
    },
    toAboutPage(){
      this.$router.push('/about')
    },
    toSettingPage(){
      this.$router.push('/setting')
    },
    logOut(){
      // api here and delete information in vuex
      this.$store.commit('revokeAuthentication')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  position: relative;
  width: 100vw;
  height: 60px;
  background: $theme-green;
  &__title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: $white-text-color;
    &:hover{
      cursor: pointer;
      opacity: 0.7;
    }
  }
  &__functions{
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translate(0,-50%);
    display: flex;
    align-items: center;
    button{
      margin-left: 0.8rem;
      color: $white-text-color;
    }
    .icon{
      width: 18px;
      height: 18px;
    }
    &__search{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      input{
        padding: 3px 5px;
        border-radius: 5px;
        transform: scale(0, 100%);
        transform-origin: right;
        transition: transform .3s .4s;
        &:hover, &:focus{
          transform: scale(100%, 100%);
        }
      }
      button:hover ~ input{
        transform: scale(100%, 100%);
      }
    }
    
  }

}
</style>