
const { I } = inject();

module.exports = {
  newUserEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  mailField: { css: '#email' },
  password: { css: '#passwd' },
  logInButton: { css: '#SubmitLogin' },

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },

  fillNewUserEmail() {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, userData.email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  fillUserData(userData) {
    I.waitForVisible(this.mailField);
    I.fillField(this.mailField, userData.email);
    I.fillField(this.password, userData.password);
  },

  clickLogInButton() {
    I.click(this.logInButton)
  }
}
