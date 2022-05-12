const { I } = inject();

module.exports = {
  womenSectionButton: { css: 'a[title="Women"]' },
  itemCard: { css: '.product-container .product-name' },
  cardPrice: { css: '#our_price_display' },


  clickSection() {
    I.waitForVisible(this.womenSectionButton);
    I.click(this.womenSectionButton);
    I.waitForVisible(this.itemCard);
    I.click(this.itemCard);
  },
  async getProductPrice() {
    return await I.grabTextFrom(this.cardPrice);
  }
}