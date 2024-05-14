import { expect } from 'chai';

class CheckoutOverivewPage {
 
    get cartList(){
        return $$('[data-test="cart-list"]')
    }

    get checkoutTitle() {
        return $('[data-test="title"]')
    }
    
    get summaryInfo() {
        return $('.summary_info')
    }

    get paymentInformation() {
        return $('[data-test="payment-info-value"]')
    }

    get shippingInformation() {
        return $('[data-test="shipping-info-value"]')
    }

    get itemTotal() {
        return $('[data-test="subtotal-label"]')
    }

    get tax() {
        return $('[data-test="tax-label"]')
    }

    get total() {
        return $('[data-test="total-label"]')
    }

    get finishButton() {
        return $('[data-test="finish"]')
    }

    async getCardListCount(){
        return (await this.cartList).length
    }

    async checkCardListCount(expectedCount) {
        const actualCount = await this.getCardListCount();
        expect(actualCount).to.equal(expectedCount);
    }

    async checkPaymentInformation(expectedInfo) {
        const paymentInformation = await this.paymentInformation.getText();
        expect(paymentInformation).to.equal(expectedInfo);
    }

    async checkShippingInformation(expectedInfo) {
        const shippingInformation = await this.shippingInformation.getText();
        expect(shippingInformation).to.equal(expectedInfo);
    }

    async checkItemTotal(expectedTotal) {
        const itemTotalValue = await this.itemTotal.getText();
        expect(itemTotalValue).to.equal(expectedTotal);
    }

    async checkTax(expectedTax) {
        const taxValue = await this.tax.getText();
        expect(taxValue).to.equal(expectedTax);
    }

    async checkTotal(expectedTotal) {
        const totalValue = await this.total.getText();
        expect(totalValue).to.equal(expectedTotal);
    }

    async checkCheckoutOverivew(product) {
        await this.checkCardListCount(product.expectedProducts);
        await this.checkPaymentInformation(product.paymentInformation);
        await this.checkShippingInformation(product.shippingInformation);
        await this.checkItemTotal(product.priceTotal.itemTotal);
        await this.checkTax(product.priceTotal.tax);
        await this.checkTotal(product.total);
    }

    async clickFinish(){
        await this.finishButton.click()
    }
}
 
export default new CheckoutOverivewPage();
