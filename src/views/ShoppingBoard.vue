<template>
  <div class="shopping">
    <div class="shopping__categories">
      <h2 class="shopping__categories__title">主題分類</h2>
      <CategoryBar :categories="categories" />
    </div>
    <div class="shopping__hot-topic">
      <h2 class="shopping__hot-topic__title">發燒話題</h2>
      <TopicBoard />
    </div>
  </div>
</template>

<script>
import CategoryBar from "../components/CategoryBar";
import TopicBoard from "../components/TopicBoard.vue";
export default {
  name: "ShoppingBoard",
  components: {
    CategoryBar,
    TopicBoard,
  },
  data() {
    return {
      categories: [
        {
          id: '1-1',
          name: '主食零食',
          image: require('@/assets/logos/shopping/food.jpg')
        },
        {
          id: '1-2',
          name: '玩具玩偶',
          image: require('../assets/logos/shopping/toys.jpg')
        },
        {
          id: '1-3',
          name: '居家用品',
          image: require('../assets/logos/shopping/in-house.jpg')
        },
        {
          id: '1-4',
          name: '外出用品',
          image: require('../assets/logos/shopping/outdoor.jpg')
        },
        {
          id: '1-5',
          name: '清潔沐浴',
          image: require('../assets/logos/shopping/clean.jpg')
        },
        {
          id: '1-6',
          name: '保健食品',
          image: require('../assets/logos/shopping/health.jpg')
        },
        {
          id: '1-7',
          name: '衣帽領巾',
          image: require('../assets/logos/shopping/wear.jpg')
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.shopping {
  @extend %board-continaer;
  &__categories {
    @extend %part-space;
    &__title {
      @extend %title-space;
    }
  }
  &__hot-topic {
    @extend %part-space;
    &__title {
      @extend %title-space;
    }
  }
}
</style>