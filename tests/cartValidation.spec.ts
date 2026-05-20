import {test, expect} from '../fixtures/test-fixtures.ts'
import {data} from '../utils/users.ts'
test.beforeEach(async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
})
test('validate add to cart button', async({inventoryPage,page})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    await expect(page.getByRole("button", {name: "Continue Shopping"})).toBeVisible();
});
test('validate continue shopping button', async({inventoryPage,cartPage,page})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    await cartPage.continueShopping();
    await expect(page.getByRole('combobox')).toBeVisible();
});
test('validate remove button on cart page', async({inventoryPage,cartPage, page})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    await cartPage.removeFromCart('sauce labs backpack');
    await expect(page.locator('.cart_item')).not.toBeVisible();
})
test('validate remove from cart button from inventory page', async({inventoryPage,cartPage,page})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    await cartPage.continueShopping();
    await cartPage.removeFromCart('sauce labs backpack');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).not.toBeVisible();
})
test('validate checkout button', async({inventoryPage,page, cartPage})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
})
