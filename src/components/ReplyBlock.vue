<template>
  <div class="reply">
    <div class="reply__info">
      <p class="reply__info__user">{{reply.user.name}}</p>
      <p class="reply__info__time">{{reply.updatedAt}}</p>
    </div>
    <p class="reply__content">{{reply.content}}</p>
  </div>
</template>

<script>
export default {
  name: "ReplyBlock",
  props: {
    reply: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reply{
  margin-bottom: 1rem;
  border-bottom: 1px solid $support-green;
  &__info{
    display: flex;
    justify-content: space-between;
    &__user,&__time{
      color: $secondary-text-color;
    }
    &__user{
      font-weight: bold;
    }
  }
  &__content{
    margin: 0.3rem auto;
    padding: .5rem;
    line-height: 1.5rem;
  }
}
</style>