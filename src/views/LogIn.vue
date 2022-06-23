<template>
  <div class="log-in">
    <div class="log-in__form">
      <div :class="['input-box', { error: accountInput.warning }]">
        <label for="">帳號 (E-mail)</label>
        <input
          v-model="accountInput.account"
          type="text"
          placeholder="請輸入帳號"
        />
        <label class="message" for="">{{ accountInput.warning }}</label>
      </div>
      <div :class="['input-box', { error: passwordInput.warning }]">
        <label for="">密碼</label>
        <input
          v-model="passwordInput.password"
          type="text"
          placeholder="請輸入6~12字密碼"
        />
        <label class="message" for="">{{ passwordInput.warning }}</label>
      </div>
      <button 
        :disabled="submitDisable || isProcessing"
        @click.prevent.stop="handleSubmit"
        class="log-in__form__submit-btn">登入</button>
      <router-link 
        to="/signup"
        class="log-in__form__switch-btn">我要註冊</router-link>
    </div>
  </div>
</template>

<script>
import {formInputCheck} from '../utils/mixins'
import {Toast} from '../utils/helpers'
export default {
  name: "LogIn",
  mixins:[formInputCheck],
  data(){
    return{
      accountInput: {
        account: "",
        warning: "",
      },
      passwordInput: {
        password: "",
        warning: "",
      },
      isProcessing: false
    }
  },
  methods:{
    handleSubmit(){
      this.isProcessing = true
      if(!(this.accountInput.account.trim() &&
        this.passwordInput.password.trim())){
          Toast.fire({
            title: '欄位皆不可空白',
            icon: 'error'
          })
          this.isProcessing = false
          return
        }
      // may use api here to check authorizaion and get current user
      Toast.fire({
        title: '已成功登入',
        icon: 'success'
      })
      this.isProcessing = false
      this.$router.push('/home')
    },
  },
  computed:{
    submitDisable() {
      if (
        this.accountInput.warning ||
        this.passwordInput.warning 
      ) {
        return true;
      } else if(!(this.accountInput.account &&
        this.passwordInput.password 
        )){
          return true;
      }else {
        return false;
      }
    },
  },

};
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