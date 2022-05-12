const Helper = require('@codeceptjs/helper');

class Generator extends Helper {

  getRandomEmail() {
    return Date.now() + 'test@gmail.com';
  }
}

module.exports = Generator;
