let user = {
  firstName: 'Test',
  lastName: 'Automation',
  password: '11111',
  state: 'Alabama',
  city: 'Birmingham',
  address: '801 Tom Martin Dr.',
  postalCode: '35211',
  mobilePhone: '+380930000000',
  asignAdress: 'My adress', 
}

Feature('Store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
  homePage.openStore();
  homePage.clickSignIn();
  authPage.fillNewUserEmail(Date.now() + '@test.com');
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(user);
  createAccountPage.clickSubmit();
  pause()
});
