/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type womenSectionPage = typeof import('./pages/womenSection.js');
type productCartPage = typeof import('./pages/productCart.js');
type userData = typeof import('./data/user.js');
type ChaiWrapper = import('codeceptjs-chai');
type Generator = import('./generator_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, womenSectionPage: womenSectionPage, productCartPage: productCartPage, userData: userData }
  interface Methods extends Playwright, ChaiWrapper, Generator {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<Generator> {}
  namespace Translation {
    interface Actions {}
  }
}
