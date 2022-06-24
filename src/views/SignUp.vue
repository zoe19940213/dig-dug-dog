<template>
  <div class="sign-up">
    <div class="sign-up__form">
      <div :class="['input-box', { error: nameInput.warning }]">
        <label for="">暱稱</label>
        <input
          v-model="nameInput.name"
          type="text"
          placeholder="請輸入暱稱(上限50字)"
        />
        <label class="message" for="">{{ nameInput.warning }}</label>
      </div>
      <div :class="['input-box', { error: accountInput.warning }]">
        <label for="">帳號 (E-mail)</label>
        <input
          v-model="accountInput.account"
          type="email"
          placeholder="請輸入帳號"
        />
        <label class="message" for="">{{ accountInput.warning }}</label>
      </div>
      <div :class="['input-box', { error: passwordInput.warning }]">
        <label for="">密碼</label>
        <button 
          @click.prevent.stop="switchHideAndShow"
          class="hideAndShow">
          <font-awesome-icon v-if="passwordInput.show" icon="fa-solid fa-eye-slash" />
          <font-awesome-icon v-else icon="fa-solid fa-eye" />
        </button>
        <input
          v-if="passwordInput.show"
          v-model="passwordInput.password"
          type="text"
          placeholder="請輸入6~12字密碼"
        />
        <input
          v-else
          v-model="passwordInput.password"
          type="password"
          placeholder="請輸入6~12字密碼"
        />
        <label class="message" for="">{{ passwordInput.warning }}</label>
      </div>
      <div :class="['input-box', { error: passwordCheckInput.warning }]">
        <label for="">確認密碼</label>
        <input
          v-if="passwordCheckInput.show"
          v-model="passwordCheckInput.passwordCheck"
          type="text"
          placeholder="請確認密碼"
        />
        <input
          v-else
          v-model="passwordCheckInput.passwordCheck"
          type="password"
          placeholder="請確認密碼"
        />
        <label class="message" for="">{{ passwordCheckInput.warning }}</label>
      </div>
      <button 
      :disabled="submitDisable || isProcessing" 
      @click.prevent.stop = 'handleSubmit'
      class="sign-up__form__submit-btn">
        註冊
      </button>
      <router-link to="/login" class="sign-up__form__switch-btn"
        >我要登入</router-link
      >
    </div>
  </div>
</template>

<script>
import {formInputCheck, formSubmitDisable} from '../utils/mixins'
import {Toast} from '../utils/helpers'
export default {
  name: "SignUp",
  mixins:[formInputCheck, formSubmitDisable],
  data() {
    return {
      nameInput: {
        name: "",
        warning: "",
      },
      accountInput: {
        account: "",
        warning: "",
      },
      passwordInput: {
        password: "",
        warning: "",
        show: false,
      },
      passwordCheckInput: {
        passwordCheck: "",
        warning: "",
        show: false,
      },
      isProcessing: false
    };
  },
  methods: {
    switchHideAndShow(){
      this.passwordInput.show = !this.passwordInput.show
      this.passwordCheckInput.show = !this.passwordCheckInput.show
    },
    handleSubmit() {
      this.isProcessing = true
      if(!(this.nameInput.name.trim() &&
        this.accountInput.account.trim() &&
        this.passwordInput.password.trim() &&
        this.passwordCheckInput.passwordCheck.trim())){
          Toast.fire({
            title: '欄位皆不可空白',
            icon: 'error'
          })
          this.isProcessing = false
          return
        }
      // may use api here to check authorizaion and get current user
      Toast.fire({
        title: '已成功註冊',
        icon: 'success'
      })
      this.isProcessing = false
      this.$router.push('/login')
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/sign.scss';
.sign-up {
  @extend %form-position;
  &__form {
    padding-bottom: 40px;
    height: 80vh;
    @extend %form-display;
    .input-box {
      margin-top: 2rem;
      @extend %input-style;
      input,label {
        color: $primary-text-color;
      }
      .hideAndShow{
        @extend %password-eye;
      }
    }
    &__submit-btn {
      @extend %input-submit-btn;
    }
    &__switch-btn {
      @extend %input-switch-btn;
    }
  }
}
</style>