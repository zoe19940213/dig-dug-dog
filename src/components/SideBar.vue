<template>
  <div class="side-bar">
    <div class="side-bar__wrapper">
      <ul class="side-bar__list">
        <li class="side-bar__list__item">
          <font-awesome-icon    
            :class="['point', {active: this.$route.path.includes('shopping')}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/shopping">找好商品</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
            :class="['point', {active: this.$route.path.includes('medical')}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/medical">找好醫院</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
            :class="['point', {active: this.$route.path.includes('knowledge')}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/knowledge">找好知識</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
          :class="['point', {active: this.$route.path.includes('getdogs')}]" 
          icon="fa-solid fa-play" />
          <router-link to="/board/getdogs">找好狗狗</router-link>
        </li>
      </ul>
    </div>
    <button 
      @click.prevent.stop="openModal"
      class="side-bar__post-btn">
      我有情報
    </button>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  methods:{
    openModal(){
      this.$emit('openModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar{
  padding: 2rem 3rem 2rem 2rem;
  text-align: center;
  &__wrapper{
    width: 100%;
    padding: 1.5rem;
    border-radius: 5px;
    background: $theme-yellow;
  }
  &__list{
    text-align: center;
    &__item{
      line-height: 2.5rem;
      a{
        font-weight: bold;
        &:hover{
          opacity: 0.7;
        }
      }
      .point{
        display: none;
        color: $theme-orange;
        margin-right: 10px;
        &.active{
          display: inline-block;
          & ~ a{
            color: $theme-orange;
          }
        }
      }
    }
  }
  &__post-btn{
    margin-top: 1.5rem;
    @include set-button($theme-orange, $white-text-color, $primary-text-size){
      padding: 10px 20px;
    }
  }
}


</style>