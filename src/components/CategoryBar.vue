<template>
  <div class="categories">
    <div
      v-for="category in categories" :key="category.id"
      @click.prevent.stop="getIntoCategory(category.id)"
      class="categories__category-card">
      <img class="categories__category-card__image" :src="category.image" alt="" />
      <p class="categories__category-card__description">{{category.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBar",
  props: {
    categories:{
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods:{
    getIntoCategory(categoryId){
      this.$router.push({
        name: 'topics',
        params: {
          category: 'shopping',
          categoryId: categoryId,}
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  overflow: auto;
  display: flex;
  &__category-card{
    margin-right: 2rem;
    padding: 1rem;
    width: 200px;
    height: 175px;
    text-align: center;
    border: 2px solid $support-orange;
    border-radius: 10px;
    &:hover{
      cursor: pointer;
      border-color: $theme-orange;
      &>img, &>p{
        opacity: 0.7;
      }
    }
    &__image{
      width: 120px;
    }
    &__description{
      color: $primary-text-color;
    }
  }
}
</style>