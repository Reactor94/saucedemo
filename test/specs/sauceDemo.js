import InventoryPage from '../pages/InventoryPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage.js';
import LoginPage from '../pages/LoginPage.js';
import { customer, product, productName } from '../../testData/orderData.js';
import CheckoutCompletePage from '../pages/CheckoutCompletePage.js';
import { standardUser } from '../../testData/loginData.js';

describe('Sauce Demo', () => {

    beforeEach(async () => {
        await InventoryPage.open();
    });

    it('Ensure checkout process completes after adding product', async () => {
        await LoginPage.login(standardUser.userName, standardUser.password);

        await InventoryPage.ensureOnPage();
        await InventoryPage.addToCart(productName);
        await InventoryPage.checkNumCartItems('1');
        await InventoryPage.openCart();

        await CartPage.checkProductInCart(product);
        await CartPage.clickCheckoutButton();

        await CheckoutPage.fillCustomerInformation(customer);
        await CheckoutPage.clickContinue();

        await CheckoutOverviewPage.checkCheckoutOverivew(product);
        await CheckoutOverviewPage.clickFinish();

        await CheckoutCompletePage.checkThankYouTextDisplayed();
    });

    it('Ensure user cannot finish checkout proces when customer information is not filled', async () => {
        await LoginPage.login(standardUser.userName, standardUser.password);

        await InventoryPage.ensureOnPage();
        await InventoryPage.addToCart(productName);
        await InventoryPage.checkNumCartItems('1');
        await InventoryPage.openCart();

        await CartPage.checkProductInCart(product);
        await CartPage.clickCheckoutButton();

        await CheckoutPage.clickContinue();
        await CheckoutPage.verifyEmptyFieldsErrors();
    });
});
