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
  email: '121212@gmail.com',
}

Feature('Store');

Before(({ I, homePage}) => {
  homePage.openStore()
});

Scenario('test something', ({ I, homePage, authPage, createAccountPage, userData }) => {
  homePage.openStore();
  homePage.clickSignIn();
  // user.email = await I.getRandomEmail();
  const email = authPage.fillNewUserEmail(userData.email);
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(user);
  createAccountPage.clickSubmit();
});

Scenario('test data', async ({ I, homePage, authPage, womenSectionPage, productCardPage, userData}) => {
  homePage.clickSignIn();
  authPage.fillUserData(userData);
  authPage.clickLogInButton();
  womenSectionPage.clickSection();
  let productPrice = await productCardPage.getProductPrice();
  productCardPage.addItem();
  let cartPrice = await womenSectionPage.getCartPrice();
  I.assertEqual(productPrice, cartPrice);
});

// After(({ I, homePage }) => {
//   homePage.clickLogOut()
// });