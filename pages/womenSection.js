const { I } = inject();

module.exports = {
  womenSectionButton: {css: 'a[title="Women"]'},
  itemCard: {css: '.product-container .product-name'},
  price: {css: '#product_price_1_1_684897'},

clickSection() {
  I.waitForVisible(this.womenSectionButton);
  I.click(this.womenSectionButton);
  I.waitForVisible(this.itemCard);
  I.click(this.itemCard);
},
async getCartPrice() { 
  return await I.grabTextFrom(this.price);
}
}