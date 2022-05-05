const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},
  logOutButton: {css: 'a.logout'},

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickLogOut() {
    I.click(this.logOutButton)
  }
}