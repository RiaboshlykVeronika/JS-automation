const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      waitForTimeout: 10000,
      timeout: 10000,
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
    },
      Generator: {
        require: './generator_helper.js',
      },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    womenSectionPage: './pages/womenSection.js',
    productCardPage: './pages/productCard.js',
    userData: './data/user.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'JS-automation'
}