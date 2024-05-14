import { expect } from "chai";

class CheckoutPage {

   get firstName() {
      return $('[data-test="firstName"]')
   }

   get lastName() {
      return $('[data-test="lastName"]')
   }

   get zipPostalCode() {
      return $('[data-test="postalCode"]')
   }

   get continueButton() {
      return $('[data-test="continue"]')
   }

   get errorCircleIcons() {
      return $$('[data-icon="times-circle"]')
   }

   get errorMessage(){
      return $('[data-test="error"]')
   }

   async fillCustomerInformation(customer) {
      await this.firstName.setValue(customer.firstName)
      await this.lastName.setValue(customer.lastName)
      await this.zipPostalCode.setValue(customer.zipPostalCode)
   }

   async clickContinue() {
      await this.continueButton.click()
   }

   async verifyEmptyFieldsErrors() {
      expect(await this.errorCircleIcons.length).to.equal(3);
      expect(await this.errorMessage.isDisplayed()).to.be.true;
  }
}

export default new CheckoutPage();