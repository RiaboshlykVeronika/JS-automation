const { I } = inject();
// let cardPrice = await I.grabTextFrom(this.price);

module.exports = {
  womenSectionButton: {css: 'a[title="Women"]'},
  itemCard: {css: '.product-container .product-name'},
  price: {css: '#our_price_display'},

clickSection() {
  I.waitForVisible(this.womenSectionButton);
  I.click(this.womenSectionButton);
  I.waitForVisible(this.itemCard);
  I.click(this.itemCard);
  // cardPrice;
},

}