const { I } = inject();

module.exports = {

  addToCartButton: { css: '#add_to_cart' },
  proceedToCheckoutButton: { css: 'a[title="Proceed to checkout"]' },
  processAddressSubmit: { css: 'button[name="processAddress"]' },
  procesCarrierSubmit: { css: 'button[name="processCarrier"]' },
  checkOption: { css: '#cgv' },
  payModuleButton: { css: 'a[title="Pay by bank wire"]' },
  price: { css: '#total_product'},
  confirmButton: { css: '.button-medium' },

  addItem() {
    I.waitForVisible(this.addToCartButton);
    I.click(this.addToCartButton);
    I.click(this.proceedToCheckoutButton);
    I.waitForVisible(this.price);
    I.click(this.proceedToCheckoutButton);
    I.waitForVisible(this.processAddressSubmit);
    I.click(this.processAddressSubmit);
    I.waitForVisible(this.checkOption);
    I.checkOption(this.checkOption);
    I.click(this.procesCarrierSubmit);
    I.click(this.payModuleButton);
    I.click(this.confirmButton);
  },
  async getCartPrice() {
    return await I.grabTextFrom(this.price);
  }
}