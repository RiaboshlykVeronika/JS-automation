
Feature('Store');

Before(({ I, homePage }) => {
  homePage.openStore()
});

Scenario('test something', async ({ I, homePage, authPage, createAccountPage, userData }) => {
  userData.email = await I.getRandomEmail();
  homePage.openStore();
  homePage.clickSignIn();
  authPage.fillNewUserEmail(await I.getRandomEmail(userData.email));
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(userData);
  createAccountPage.clickSubmit();
});

// Scenario('test data', async ({ I, homePage, authPage, womenSectionPage, productCartPage, userData}) => {
//   homePage.clickSignIn();
//   // userData.email = await I.getRandomEmail();
//   authPage.fillUserData(userData);
//   authPage.clickLogInButton();
//   womenSectionPage.clickSection();
//   let productPrice = await womenSectionPage.getProductPrice();
//   productCartPage.addItem();
//   let cartPrice = await productCartPage.getCartPrice();
//   I.assertEqual(productPrice, cartPrice);
// });

// After(({ I, homePage }) => {
//   homePage.clickLogOut()
// });