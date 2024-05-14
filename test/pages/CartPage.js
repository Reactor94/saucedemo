import { expect } from 'chai';

class CartPage {

    get cartList(){
        return $$('[data-test="cart-list"]')
    }

    get cartItemName() {
        return $('[data-test="inventory-item-name"]');
    }

    get productPrice() {
        return $('[data-test="inventory-item-price"]');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    async checkProductInCart(product) {
        const regex = /\$\d+\.\d+/;

        const productTitle = await this.cartItemName.getText()
        expect(productTitle).to.equal(product.title);

        const productPrice = await this.productPrice.getText()
        expect(productPrice).to.equal(product.priceTotal.itemTotal.match(regex)[0]);
    }

    async clickCheckoutButton(){
        (await this.checkoutButton).click()
    }
}

export default new CartPage();
