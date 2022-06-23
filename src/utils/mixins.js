export const formInputCheck = {
  methods: {
    checkEmail(inputWords) {
      const inputEmail = inputWords.split("@");
      if (inputEmail.length !== 2) {
        return false;
      } else if (inputEmail[0].length === 0 || inputEmail[1].length === 0) {
        return false;
      } else {
        if (inputEmail[1].split(".").length < 2) {
          return false;
        }
        return true;
      }
    },
  },
  watch: {
    "nameInput.name" (inputWords) {
      if (inputWords.length > 50) {
        this.nameInput.warning = "字數超出上限";
      } else if (inputWords.length < 1) {
        this.nameInput.warning = "暱稱不可空白";
      } else {
        this.nameInput.warning = "";
      }
    },
    "accountInput.account" (inputWords) {
      if (this.checkEmail(inputWords)) {
        this.accountInput.warning = "";
      } else {
        this.accountInput.warning = "Email格式不正確";
      }
    },
    "passwordInput.password" (inputWords) {
      if (inputWords.length > 12) {
        this.passwordInput.warning = "密碼過長";
      } else if (inputWords.length < 6) {
        this.passwordInput.warning = "密碼長度不足";
      } else {
        this.passwordInput.warning = "";
      }
    },
    "passwordCheckInput.passwordCheck" (inputWords) {
      if (inputWords === this.passwordInput.password) {
        this.passwordCheckInput.warning = "";
      } else {
        this.passwordCheckInput.warning = "與密碼不符";
      }
    },
  },
}