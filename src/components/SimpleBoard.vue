<template>
  <div class="simple-board">
    <div class="simple-board__wrapper">
      <h3 class="simple-board__title">{{topics.category}}</h3>
      <ul class="simple-board__topics">
        <li
          v-for="topic in topics.topics" :key="topic.id" 
          class="simple-board__topics__item">
          <router-link 
            :to="{
              name: 'topic', 
              params: {topicId: topic.id} }">
            {{topic.description}}</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleBoard',
  props:{
    topics:{
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.simple-board{
  &__wrapper{
    border: 2px solid $theme-green;
  }
  &__title{
    padding: 1rem;
    border-bottom: 1px solid $theme-green;
  }
  &__topics{
    &__item{
      padding: 0.8rem 1rem;
      border-bottom: 1px solid $support-green;
      a:hover{
        color: $theme-orange;
      }
    }
  }
}
</style>