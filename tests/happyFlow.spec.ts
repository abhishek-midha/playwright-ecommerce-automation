import {test, expect} from '../fixtures/test-fixtures';
import { data } from '../utils/users';

test.beforeEach(async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
})
test("validate successful order", async({page, inventoryPage, checkoutPage})=>{
    await inventoryPage.addToCart('sauce Labs backpack');
    await inventoryPage.goToCart();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await checkoutPage.fillFirstName('Abhishek');
    await checkoutPage.fillLastName('Midha');
    await checkoutPage.fillZipCode(152123);
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.getByRole('button', {name: 'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
})