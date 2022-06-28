<template>
  <div class="setting">
    <div class="setting__status-board">
      <h2 class="setting__status-board__title">使用者暱稱，你好！</h2>
      <div class="setting__status-board__score">
        <h3 class="setting__status-board__score__current">目前積分：26</h3>
        <p class="setting__status-board__score__description">
          積分說明： 提供情報可獲得10分，回覆可獲得1分，報錯經確認可獲得3分
        </p>
      </div>
      <div class="setting__status-board__info">
        <h3 class="setting__status-board__info__intell">提供情報數：2</h3>
        <h3 class="setting__status-board__info__reply">回覆數：6</h3>
        <h3 class="setting__status-board__info__liked">喜歡的主題</h3>
      </div>
    </div>
    <div class="setting__modify">
      <h2 class="setting__modify__title">資料修改</h2>
      <div class="setting__modify__form">
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
          @click.prevent.stop="handleSubmit"
          class="setting__modify__form__submit-btn"
        >
          確認修改
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formInputCheck, formSubmitDisable } from "../utils/mixins";
import { Toast } from "../utils/helpers";

const dummyCurrentUser = {
  name: "Zoe Chen",
  account: "zoechen34@hotmail.com",
  password: "831029",
  point: 26,
  intellCounts: 2,
  replyCounts: 6,
  likeTopics: [],
};

export default {
  name: "SettingPage",
  mixins: [formInputCheck, formSubmitDisable],
  data() {
    return {
      currentUser: {
        name: "",
        account: "",
        password: "",
        point: 0,
        intellCounts: 0,
        replyCounts: 0,
        likeTopics: [],
      },
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
      isProcessing: false,
    };
  },
  methods: {
    fecthCurrentUser() {
      // use api here to etch current user
      const {
        name,
        point,
        account,
        password,
        intellCounts,
        replyCounts,
        likeTopics,
      } = dummyCurrentUser;
      this.currentUser = {
        name,
        account,
        password,
        point,
        intellCounts,
        replyCounts,
        likeTopics,
      };
      this.nameInput= this.currentUser.name
      this.accountInput = this.currentUser.account
      this.passwordInput = this.currentUser.password
    },
    switchHideAndShow() {
      this.passwordInput.show = !this.passwordInput.show;
      this.passwordCheckInput.show = !this.passwordCheckInput.show;
    },
    handleSubmit() {
      // 尚未調整成setting page版本
      this.isProcessing = true;
      if (
        !(
          this.nameInput.name.trim() &&
          this.accountInput.account.trim() &&
          this.passwordInput.password.trim() &&
          this.passwordCheckInput.passwordCheck.trim()
        )
      ) {
        Toast.fire({
          title: "欄位皆不可空白",
          icon: "error",
        });
        this.isProcessing = false;
        return;
      }
      // may use api here to check authorizaion and get current user
      Toast.fire({
        title: "已成功修改",
        icon: "success",
      });
      this.isProcessing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/sign.scss";
.setting {
  margin: 50px auto;
  width: 65%;
  @extend %scroll-part;
  color: $primary-text-color;
  &__status-board {
    margin-bottom: 2.5rem;
    &__title {
      margin-bottom: 2rem;
    }
    &__score {
      margin-bottom: 1.5rem;
      padding-left: 1rem;
      &__current {
        margin-bottom: 0.5rem;
      }
      &__description {
        font-weight: bold;
        color: $secondary-text-color;
      }
    }
    &__info {
      padding-left: 1rem;
      display: flex;
      &__intell,
      &__reply {
        margin-right: 2rem;
      }
      &__liked {
        padding-bottom: 2px;
        border-bottom: 1px solid $primary-text-color;
        &:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
  }
  &__modify {
    &__title {
      margin-bottom: 1.5rem;
    }
    &__form {
      width: 500px;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .input-box {
        margin-top: 1rem;
        position: relative;
        width: 100%;
        @extend %input-style;
        input {
          width: 100%;
        }
        .hideAndShow {
          @extend %password-eye;
        }
      }
      &__submit-btn {
        @extend %input-submit-btn;
    }
    }
  }
}
</style>