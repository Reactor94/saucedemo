import { expect } from "chai";
import { config } from "../../wdio.conf.js";

class InventoryPage {
    async open() {
        await browser.url('/');
    }
    
    get productItems() {
        return $$('.inventory_item');
    }

    get cartButton() {
        return $('.shopping_cart_link');
    }

    get productsTitle() {
        return $('[data-test="title"]')
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge')
    }

    async getProductByName(name) {
        const product = await this.productItems.find(async (item) => {
            const text = await item.getText();
            if (text.includes(name)) {
                return text;
            }
        });
        return product;
    }
    
    async addToCart(productName) {
        await this.getProductByName(productName);
        // only way to get appropriate product in cart is to search for it's
        const addToCartButton = await $('//div[contains(text(),"' + productName + '")]/ancestor::div[@class="inventory_item"]').$('.btn_inventory');
        await addToCartButton.click();
    }

    async openCart() {
        (await this.cartButton).click()
    }

    async ensureOnPage() {
        const inventoryUrl = `${config.baseUrl}inventory.html`;
        const expectedTitle = 'Products';

       expect(await browser.getUrl()).to.equal(inventoryUrl, `Not on the correct page. Expected URL: ${inventoryUrl}`);

       const actualTitle = await this.productsTitle.getText();
       expect(actualTitle).to.equal(expectedTitle, `Title "${actualTitle}" does not match expected title "${expectedTitle}"`);
    }

    async checkNumCartItems(num){
        const count = await this.shoppingCartBadge.getText();
        expect(count).to.equal(num, `Shopping cart badge: has ${count}, expecting ${num}`);
    }
}

export default new InventoryPage();
