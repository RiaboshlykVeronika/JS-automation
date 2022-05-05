const { I } = inject();

module.exports = {
newUserEmailInput: {css: '#email_create'},
createAccountButton: {css: '#SubmitCreate'},
mailField: {css: '#email'},
password: {css: '#passwd'},
logInButton: {css: '#SubmitLogin'},

waitForPageLoad() {
  I.waitForVisible(this.newUserEmailInput);
},

// fillNewUserEmail(email) {
//   this.waitForPageLoad();
//   I.fillField(this.newUserEmailInput, email);
// },

clickCreateAccount() {
  I.click(this.createAccountButton);
},

fillUserData(user) {
  I.waitForVisible(this.mailField);
  I.fillField(this.mailField, user.email);
  I.fillField(this.password, user.password);
},

clickLogInButton() {
  I.click(this.logInButton)
}
}
