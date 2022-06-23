<template>
  <div class="sign-up">
    <div class="sign-up__form">
      <div class="input-box">
        <label for="">暱稱</label>
        <input v-model="name" type="text" />
      </div>
      <div class="input-box">
        <label for="">帳號 (E-mail)</label>
        <input v-model="account" type="text" />
      </div>
      <div class="input-box">
        <label for="">密碼</label>
        <input v-model="password" type="text" />
      </div>
      <div class="input-box">
        <label for="">確認密碼</label>
        <input v-model="passwordCheck" type="text" />
      </div>
      <button class="sign-up__form__submit-btn">註冊</button>
      <router-link 
        to="/login"
        class="sign-up__form__switch-btn">我要登入</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return{
      name: '',
      account: '',
      password: '',
      passwordCheck: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  &__form {
    padding-bottom: 40px;
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