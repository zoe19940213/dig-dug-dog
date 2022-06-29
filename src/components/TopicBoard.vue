<template>
  <div class="topic-board">
    <div v-if="showHeader" class="topic-board__header">
      <button class="topic-board__header__back">
        <font-awesome-icon class="icon" icon="fa-solid fa-play" />
      </button>
      <h2 class="topic-board__header__title">
        {{ topics.category.category }} - {{ topics.category.subCategory }}
      </h2>
    </div>
    <div class="topic-board__main">
      <ul class="topic-board__main__list">
        <li
          v-for="topic in topics.topicList"
          :key="topic.id"
          @click.prevent.stop="toTopic(topics.category.tag,topics.category.id,topic.id)"
          class="topic-board__main__list__item"
        >
          <div class="topic-board__main__list__item__left-part">
            <div
              :class="[
                'topic-board__main__list__item__left-part__spot',
                {
                  hot: topic.specialTag === 'hot',
                  new: topic.specialTag === 'new',
                },
              ]"
            ></div>
            <p class="topic-board__main__list__item__left-part__description">
              {{ topic.description }}
            </p>
          </div>
          <div class="topic-board__main__list__item__right-part">
            <p class="topic-board__main__list__item__right-part__create-time">
              {{ topic.updateAt }}
            </p>
            <div class="topic-board__main__list__item__right-part__icon">
              <font-awesome-icon class="icon" icon="fa-solid fa-play" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "TopicBoard",
  props:{
    topics:{
      type: Object,
      required: true
    },
    showHeader:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    toTopic(category, categoryId, topicId){
      this.$router.push({
        name: 'topic',
        params:{
          category,
          categoryId,
          topicId
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.topic-board {
  border: 2px solid $theme-green;
  border-radius: 5px;
  &__header {
    padding: 0 1rem;
    height: 4rem;
    border-bottom: 1px solid $theme-green;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      cursor: pointer;
      & > button {
        color: $theme-green;
      }
      & > h2 {
        opacity: 0.6;
      }
    }
    &__back {
      margin-right: 1rem;
      color: $support-green;
      .icon {
        transform: rotate(180deg);
      }
    }
    &__title {
    }
  }
  &__main {
    &__list {
      &__item {
        padding: 1rem;
        border-bottom: 1px solid $support-green;
        display: flex;
        justify-content: space-between;
        &:hover {
          cursor: pointer;
          & .topic-board__main__list__item__left-part__description{
            color: $theme-orange;
          }
          & .topic-board__main__list__item__right-part__icon{
            color: $theme-orange;
          }
        }
        &__left-part {
          display: flex;
          justify-content: flex-start;
          &__spot {
            margin-right: 1rem;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: $support-green;
            &.hot {
              background: $theme-orange;
            }
            &.new {
              background: $support-yellow;
            }
          }
          &__description {
            font-weight: bold;
          }
        }
        &__right-part {
          display: flex;
          justify-content: flex-end;
          &__create-time {
            margin-right: 1rem;
            color: $secondary-text-color;
          }
          &__icon{
            color: $support-pink;
          }
        }
      }
    }
  }
}
</style>