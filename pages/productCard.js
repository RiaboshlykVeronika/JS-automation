const { I } = inject();
// let cartPrice = await I.grabTextFrom(this.cartPrice);

module.exports = {

  addToCartButton: {css: '#add_to_cart'},
  proceedToCheckoutButton: {css: 'a[title="Proceed to checkout"]'},
  processAddressSubmit: {css: 'button[name="processAddress"]'},
  procesCarrierSubmit: {css: 'button[name="processCarrier"]'},
  checkOption: {css: '#cgv'},
  payModuleButton: {css: 'a[title="Pay by bank wire"]'},
  price: {css: '#our_price_display'},
  cartPrice: {css: '#product_price_1_1_684897'},
  

 addItem() { 
  I.waitForVisible(this.addToCartButton);
  I.click(this.addToCartButton);
  I.click(this.proceedToCheckoutButton);
  pause();
  I.click(this.proceedToCheckoutButton);
  I.click(this.processAddressSubmit);
  I.checkOption(this.checkOption);
  I.click(this.procesCarrierSubmit);
  // cartPrice;
  I.click(this.payModuleButton);
}
}
