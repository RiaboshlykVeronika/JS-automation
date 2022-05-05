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
  email: '12525@gmail.com',
}

Feature('Store');

Before(({ I, homePage}) => {
  homePage.openStore()
});

// Scenario('test something @reg', ({ I, homePage, authPage, createAccountPage, userData }) => {
//   homePage.openStore();
//   homePage.clickSignIn();
//   authPage.fillNewUserEmail(user.email);
//   authPage.clickCreateAccount();
//   createAccountPage.fillNewUserForm(user);
//   createAccountPage.clickSubmit();
// });

Scenario('test data @login', async ({ I, homePage, authPage, womenSectionPage, productCardPage}) => {
  homePage.clickSignIn();
  authPage.fillUserData(user);
  authPage.clickLogInButton();
  womenSectionPage.clickSection();
  productCardPage.addItem();
  // I.assertEqual(cardPrice, cartPrice);
});

// After(({ I, homePage }) => {
//   homePage.clickLogOut()
// });