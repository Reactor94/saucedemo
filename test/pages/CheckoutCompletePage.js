import { expect } from "chai";

class CheckoutCompletePage {

    get thankYouHeader() {
       return $('[data-test="complete-header"]')
    }
 
    get backHomeButton() {
       return $('[data-test="back-to-products"]')
    }
 
    async checkThankYouTextDisplayed() {
      const thankYouText =  await this.thankYouHeader.getText()
      expect(thankYouText).to.equal('Thank you for your order!')
    }

 }
 
 export default new CheckoutCompletePage();