<template>
  <div class="side-bar">
    <div class="side-bar__wrapper">
      <ul class="side-bar__list">
        <li class="side-bar__list__item">
          <font-awesome-icon    
            :class="['point', {active: this.$route.name === 'shopping-board'}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/shopping">找好商品</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
            :class="['point', {active: this.$route.name === 'medical-board'}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/medical">找好醫院</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
            :class="['point', {active: this.$route.name === 'knowledge-board'}]" 
            icon="fa-solid fa-play" />
          <router-link to="/board/knowledge">找好知識</router-link>
        </li>
        <li class="side-bar__list__item">
          <font-awesome-icon 
          :class="['point', {active: this.$route.name === 'get-dogs'}]" 
          icon="fa-solid fa-play" />
          <router-link to="/board/getdogs">找好狗狗</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'SideBar',
}
</script>

<style lang="scss" scoped>
.side-bar{
  padding: 2rem 3rem 2rem 2rem;
  &__wrapper{
    width: 100%;
    padding: 1.5rem;
    border-radius: 5px;
    background: $theme-yellow;
  }
  &__list{
    text-align: center;
    &__item{
      color: $primary-text-color;
      line-height: 2.5rem;
      a{
        font-weight: bold;
        color: $primary-text-color;
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
}


</style>