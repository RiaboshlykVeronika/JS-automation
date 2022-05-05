const { I } = inject();

module.exports = {

  addToCartButton: {css: '#add_to_cart'},
  proceedToCheckoutButton: {css: 'a[title="Proceed to checkout"]'},
  processAddressSubmit: {css: 'button[name="processAddress"]'},
  procesCarrierSubmit: {css: 'button[name="processCarrier"]'},
  checkOption: {css: '#cgv'},
  payModuleButton: {css: 'a[title="Pay by bank wire"]'},
  cardPrice: {css: '#our_price_display'},

 addItem() { 
  I.waitForVisible(this.addToCartButton);
  I.click(this.addToCartButton);
  I.click(this.proceedToCheckoutButton);
  pause();
  I.click(this.proceedToCheckoutButton);
  I.click(this.processAddressSubmit);
  I.checkOption(this.checkOption);
  I.click(this.procesCarrierSubmit);
  I.waitForVisible(this.cartPrice)
  I.click(this.payModuleButton);
 },
  async getProductPrice() { 
  return await I.grabTextFrom(this.cardPrice);
}
}