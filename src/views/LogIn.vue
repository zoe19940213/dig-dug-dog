<template>
  <div class="log-in">
    <div class="log-in__form">
      <div class="input-box">
        <label for="">帳號 (E-mail)</label>
        <input type="text" />
      </div>
      <div class="input-box">
        <label for="">密碼</label>
        <input type="text" />
      </div>
      <button class="log-in__form__submit-btn">登入</button>
      <router-link 
        to="/signup"
        class="log-in__form__switch-btn">我要註冊</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.log-in {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  &__form {
    padding-bottom: 60px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    .input-box {
      margin-top: 2rem;
      @extend %input-style;
      input, label{
        color: $primary-text-color;
      }
    }
    &__submit-btn {
      margin-top: 2rem;
      width: 100px;
      @include set-button($theme-orange, $white-text-color, 20px);
    }
    &__switch-btn{
      margin-top: 1rem;
      font-size: $secondary-text-size;
      color: $secondary-text-color;
      &:hover{
        opacity: 0.7;
      }
    }
  }
}
</style>