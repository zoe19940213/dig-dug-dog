<template>
  <div class="log-in">
    <div class="log-in__form">
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
        <button @click.prevent.stop="switchHideAndShow" class="hideAndShow">
          <font-awesome-icon
            v-if="passwordInput.show"
            icon="fa-solid fa-eye-slash"
          />
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
      <button
        :disabled="submitDisable || isProcessing"
        @click.prevent.stop="handleSubmit"
        class="log-in__form__submit-btn"
      >
        登入
      </button>
      <router-link to="/signup" class="log-in__form__switch-btn"
        >我要註冊</router-link
      >
    </div>
  </div>
</template>

<script>
import { formInputCheck } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "LogIn",
  mixins: [formInputCheck],
  data() {
    return {
      accountInput: {
        account: "",
        warning: "",
      },
      passwordInput: {
        password: "",
        warning: "",
        show: false,
      },
      isProcessing: false,
    };
  },
  methods: {
    switchHideAndShow() {
      this.passwordInput.show = !this.passwordInput.show;
    },
    handleSubmit() {
      this.isProcessing = true;
      if (
        !(
          this.accountInput.account.trim() && this.passwordInput.password.trim()
        )
      ) {
        Toast.fire({
          title: "欄位皆不可空白",
          icon: "error",
        });
        this.isProcessing = false;
        return;
      }

      //use api here to check authorizaion and get token, user-inform
      
      // <-- delete if api works
      const dummyData = {
        token: "front-end-token-123",
        currentUser: {
          id: uuidv4(),
          name: "Guest",
          account: this.accountInput.account,
          password: this.passwordInput.password,
          point: Math.floor(Math.random() * 101),
          postCount: Math.floor(Math.random() * 51),
          replyCount: Math.floor(Math.random() * 31),
        },
      };
      // delete if api works -->

      sessionStorage.setItem("token", dummyData.token);
      this.$store.commit("setCurrentUser", dummyData.currentUser);
      
      // <-- delete if api works
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify(dummyData.currentUser)
      );
      // delete if api works -->

      Toast.fire({
        title: "已成功登入",
        icon: "success",
      });
      this.isProcessing = false;
      this.$router.push("/home");
    },
  },
  computed: {
    submitDisable() {
      if (this.accountInput.warning || this.passwordInput.warning) {
        return true;
      } else if (!(this.accountInput.account && this.passwordInput.password)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/sign.scss";
.log-in {
  @extend %form-position;
  &__form {
    padding-bottom: 60px;
    height: 80vh;
    @extend %form-display;
    .input-box {
      margin-top: 2rem;
      @extend %input-style;
      input,
      label {
        color: $primary-text-color;
      }
      .hideAndShow {
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