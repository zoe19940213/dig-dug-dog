<template>
  <div class="carousel">
    <button @click.prevent.stop="handleBtnLeft()" class="carousel__button-left">
      <font-awesome-icon class="icon" icon="fa-solid fa-play" />
    </button>
    <div class="carousel__container">
      <div :class="['carousel__cards', { 'left-move': leftMove }]">
        <div
          v-for="product in products"
          :key="product.id"
          class="carousel__cards__card"
        >
          <p class="carousel__cards__card__check">Check!</p>
          <img class="carousel__cards__card__img" :src="product.image" alt="" />
          <p class="carousel__cards__card__description">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <button
      @click.prevent.stop="handleBtnRight()"
      class="carousel__button-right"
    >
      <font-awesome-icon class="icon" icon="fa-solid fa-play" />
    </button>
  </div>
</template>

<script>
export default {
  name: "CarouselPart",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      leftMove: false,
    };
  },
  methods: {
    handleBtnLeft() {
      this.leftMove = false;
    },
    handleBtnRight() {
      this.leftMove = true;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.carousel {
  margin: 2rem 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    position: relative;
    width: 85%;
    overflow: hidden;
  }
  &__cards {
    position: relative;
    &.left-move {
      left: -100%;
    }
    left: 0;
    transition: left 0.3s;
    display: flex;
    &__card {
      position: relative;
      margin-right: 1rem;
      text-align: center;
      &:hover {
        cursor: pointer;
        &>img {
          opacity: 0.5;
        }
        &>.carousel__cards__card__check{
          transform: translate(-50%, -50%) scale(1, 1);
        }
      }
      &__check {
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0, 1);
        transition: transform 0.3s;
        font-weight: bold;
      }
      &__img {
        margin-bottom: 0.8rem;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 2px solid $support-pink;
        border-radius: 5px;
      }
    }
  }

  &__button-left {
    margin-right: 1.5rem;
    transform: rotate(180deg);
    color: $support-pink;
    .icon {
      font-size: 24px;
    }
  }
  &__button-right {
    margin-left: 1rem;
    color: $support-pink;
    .icon {
      font-size: 24px;
    }
  }
}
</style>