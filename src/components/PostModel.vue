<template>
  <div class="post">
    <div @click.prevent.stop="$router.back()" class="post__header">
      <font-awesome-icon class="post__header__icon" icon="fa-solid fa-play" />
      <div class="post__header__text">
        <h2 class="post__header__text__title">{{ post.title }}</h2>
        <p class="post__header__text__author">Author: {{ post.user.name }}</p>
        <p class="post__header__text__time">
          Updated Time: {{ post.updatedAt }}
        </p>
      </div>
    </div>
    <div class="post__body">
      <p class="post__body__content">{{ post.content }}</p>
      <div class="post__body__buttons">
        <button
          v-if="post.isLiked"
          @click.prevent.stop="unlike"
          class="post__body__buttons__like">
          <font-awesome-icon
            icon="fa-solid fa-heart"
            class="icon"
          />
        </button>
        <button
          v-else 
          @click.prevent.stop="like"
          class="post__body__buttons__like">
          <font-awesome-icon 
            icon="fa-regular fa-heart" class="icon" />
        </button>
        <label for="" class="post__body__buttons__like-count">{{
          post.likeCount
        }}</label>
        <button
          @click.prevent.stop="toggleReplyInput"
          class="post__body__buttons__reply"
        >
          <font-awesome-icon icon="fa-regular fa-comment-dots" class="icon" />
        </button>
        <label for="" class="post__body__buttons__reply-count">{{
          post.replyCount
        }}</label>
      </div>
      <button class="post__body__mistake">
        <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostModel",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    like() {
      //api here
      this.$emit('like')
    },
    unlike() {
      //api here
      this.$emit('unlike')
    },
    toggleReplyInput() {
      this.$emit("toggleReplyInput");
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__header {
    padding-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid $theme-green;
    &:hover {
      cursor: pointer;
      & .post__header__icon {
        color: $theme-green;
      }
      & h2 {
        opacity: 0.7;
      }
    }
    &__icon {
      margin-right: 1rem;
      font-size: $big-text-size;
      color: $support-green;
      transform: rotate(180deg);
    }
    &__text {
      &__title {
        margin-bottom: 0.8rem;
      }
      &__author,
      &__time {
        margin-bottom: 0.6rem;
        color: $secondary-text-color;
      }
    }
  }
  &__body {
    position: relative;
    padding: 1.5rem 1.5rem 0;
    &__content {
      margin-bottom: 1.5rem;
      line-height: 1.5rem;
      white-space: pre-wrap;
    }
    &__buttons {
      padding-left: 5px;
      display: flex;
      align-items: center;
      &__like {
        color: $support-pink;
      }
      &__like-count {
        margin-right: 2rem;
        color: $primary-text-color;
      }
      &__reply {
        color: $support-orange;
      }
      &__reply-count {
        color: $primary-text-color;
      }
    }
    .icon {
      margin-right: 0.5rem;
      font-size: $big-text-size;
    }
    &__mistake {
      position: absolute;
      right: 10px;
      bottom: 0;
      color: $support-yellow;
    }
  }
}
</style>