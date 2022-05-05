const { I } = inject();

module.exports = {
 firstNameInput: {css: '#customer_firstname'},
 lastNameInput: {css: '#customer_lastname'},
 passwordInput: {css : '#passwd'},
 adressInput: {css: '#address1'},
 cityInput: {css: '#city'},
 stateSelect: { css: '#id_state'},
 postalCodeInput: { css: '#postcode'},
 mobilePhoneInput: {css: '#phone_mobile'},
 asignAdressInput: {css: '#alias'},
 submitAccountButton: {css: '#submitAccount'},

 
 fillNewUserForm(user) {
   this.waitforPageLoad();
   I.fillField(this.firstNameInput, user.firstName);
   I.fillField(this.lastNameInput, user.lastName);
   I.fillField(this.passwordInput, user.password);
   I.fillField(this.adressInput, user.address);
   I.fillField(this.cityInput, user.city);
   I.click(this.stateSelect);
   I.selectOption(this.stateSelect, user.state);
   I.fillField(this.postalCodeInput, user.postalCode);
   I.fillField(this.mobilePhoneInput, user.mobilePhone);
   I.fillField(this.asignAdressInput, user.asignAdress);
 },

 clickSubmit() {
  I.click(this.submitAccountButton);
},

 waitforPageLoad() {
   I.waitForVisible(this.firstNameInput);
 },
}
