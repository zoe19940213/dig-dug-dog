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
      <div :class="['input-box', { error: passwordCheckInput.warning }]">
        <label for="">確認密碼</label>
        <input
          v-model="passwordCheckInput.passwordCheck"
          type="text"
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
import {formInputCheck} from '../utils/mixins'
import {Toast} from '../utils/helpers'
export default {
  name: "SignUp",
  mixins:[formInputCheck],
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
      },
      passwordCheckInput: {
        passwordCheck: "",
        warning: "",
      },
      isProcessing: false
    };
  },
  methods: {
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
  },
  computed: {
    submitDisable() {
      if (
        this.nameInput.warning ||
        this.accountInput.warning ||
        this.passwordInput.warning ||
        this.passwordCheckInput.warning
      ) {
        return true;
      } else if(!(this.nameInput.name &&
        this.accountInput.account &&
        this.passwordInput.password &&
        this.passwordCheckInput.passwordCheck)){
          return true;
      }else {
        return false;
      }
    },
  },
};
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
      input,
      label {
        color: $primary-text-color;
      }
    }
    &__submit-btn {
      margin-top: 2rem;
      width: 100px;
      @include set-button($theme-orange, $white-text-color, 20px);
    }
    &__switch-btn {
      margin-top: 1rem;
      font-size: $secondary-text-size;
      color: $secondary-text-color;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>