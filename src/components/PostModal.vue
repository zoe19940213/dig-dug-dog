<template>
  <div class="modal">
    <div class="modal__header">
      <h3 class="modal__header__title">我有情報</h3>
      <button @click.prevent.stop="closeModal" class="modal__header__cross-btn">
        <font-awesome-icon icon="fa-solid fa-xmark" class="icon" />
      </button>
    </div>
    <div class="modal__body">
      <label class="modal__body__topic__label item-label" for="">Topic</label>
      <input class="modal__body__topic__input" type="text" />
      <label class="modal__body__category__label item-label" for=""
        >Category</label
      >
      <div class="modal__body__category__group">
        <div class="modal__body__category__group__item">
          <input type="radio" name="category" 
                 v-model="selectCategory" value="shopping" checked/>
          <label class="category-label" for="">找好商品</label>
        </div>
        <div class="modal__body__category__group__item">
          <input type="radio" name="category" 
                 v-model="selectCategory" value="medical" />
          <label class="category-label" for="">找好醫療</label>
        </div>
        <div class="modal__body__category__group__item">
          <input type="radio" name="category" 
                 v-model="selectCategory" value="knowledge"/>
          <label class="category-label" for="">找好知識</label>
        </div>
        <div class="modal__body__category__group__item">
          <input type="radio" name="category" 
                 v-model="selectCategory" value="getdogs"/>
          <label class="category-label" for="">找好狗狗</label>
        </div>
      </div>
      <label class="modal__body__sub-category__label item-label" for=""
        >Sub-Category</label
      >
      <div 
        class="modal__body__sub-category__group">
        <div
          v-for="sub in subCategories[selectCategory]"
          :key="sub.id"
          class="modal__body__sub-category__group__item"
        >
          <input type="radio" name="shopping" :value="sub.id" />
          <label class="category-label" for="">{{ sub.name }}</label>
        </div>
      </div>
      <div class="modal__body__content">
        <label class="modal__body__content__label item-label" for=""
          >Content</label
        >
        <textarea
          class="modal__body__content__textarea"
          name="content"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="modal__footer">
      <button 
        @click.prevent.stop="submitForm"
        class="modal__footer__submit-btn">分享</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PostModal",
  data() {
    return {
      subCategories: {
        shopping: [
          {
            id: "1-1",
            name: "主食零食",
          },
          {
            id: "1-2",
            name: "玩具玩偶",
          },
          {
            id: "1-3",
            name: "居家用品",
          },
          {
            id: "1-4",
            name: "外出用品",
          },
          {
            id: "1-5",
            name: "清潔沐浴",
          },
          {
            id: "1-6",
            name: "保健食品",
          },
          {
            id: "1-7",
            name: "衣帽領巾",
          },
        ],
        medical: [
          {
            id: "2-1",
            name: "北北基",
          },
          {
            id: "2-2",
            name: "桃竹苗",
          },
          {
            id: "2-3",
            name: "中彰投",
          },
          {
            id: "2-4",
            name: "雲嘉南",
          },
          {
            id: "2-5",
            name: "高屏",
          },
          {
            id: "2-6",
            name: "宜花東",
          },
          {
            id: "2-7",
            name: "外島",
          },
        ],
        knowledge: [
          {
            id: "3-1",
            name: "幼犬照顧",
          },
          {
            id: "3-2",
            name: "老犬照顧",
          },
          {
            id: "3-3",
            name: "行為問題",
          },
          {
            id: "3-4",
            name: "醫療健康",
          },
          {
            id: "3-5",
            name: "社會化訓練",
          },
          {
            id: "3-6",
            name: "才藝訓練",
          },
          {
            id: "3-7",
            name: "寵物友善",
          },
          {
            id: "3-8",
            name: "其他問題",
          },
        ],
        getdogs: [
          {
            id: "4-1",
            name: "送養狗狗",
          },
          {
            id: "4-2",
            name: "領養狗狗",
          },
        ],
      },
      selectCategory: 'shopping',
    };
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    },
    submitForm(){
      // submit api here
      this.$emit('submitForm')
    },

  }
};
</script>

<style lang="scss" scoped>
.modal {
  /* - position - */
  position: absolute;
  z-index: 5;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  /* - box-model - */
  width: 800px;
  height: 500px;
  border: 2px solid $theme-orange;
  border-radius: 10px;
  /* - other - */
  background: white;
  &__header {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $theme-orange;
    &__title,
    &__cross-btn {
      color: $white-text-color;
    }
    &__cross-btn .icon {
      font-size: $big-text-size;
    }
  }
  &__body {
    padding: 1.5rem 2rem 0;
    height: calc(100% - 60px);
    overflow: auto;
    .item-label {
      font-size: $secondary-text-size;
      color: $secondary-text-color;
    }
    .category-label {
      color: $primary-text-color;
    }
    input[type="radio"] {
      margin-right: 5px;
      -webkit-appearance: none;
      width: 0.9rem;
      height: 0.9rem;
      border: 1px solid $primary-text-color;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
      }
      &:checked{
        border: 1px solid $theme-orange;
        background: $theme-orange;
      }
    }
    &__topic,
    &__content {
      &__textarea,
      &__input {
        margin: 10px 0 1.5rem;
        padding: 5px 10px;
        width: 100%;
        line-height: 1.5rem;
        border: 1px solid $support-orange;
        border-radius: 5px;
        color: $primary-text-color;
        &:focus {
          border: 1px solid $theme-orange;
        }
      }
    }
    &__category,&__sub-category {
      &__group {
        margin: 10px 0 1.5rem;
        display: flex;
        flex-flow: wrap;
        line-height: 2rem;
        &__item {
          margin-right: 1rem;
          display: flex;
          align-items: center;
        }
      }
    }
    &__content {
      &__textarea {
        overflow: auto;
      }
    }
  }
  &__footer{
    text-align: end;
    &__submit-btn{
      margin: 0 2rem 1.5rem;
      @include set-button($theme-orange, $white-text-color, $primary-text-size){
        width: 85px;
      }
    }
  }
}
</style>