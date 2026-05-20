import {expect, test} from '../fixtures/test-fixtures';
import {data} from '../utils/users'

test.beforeEach(async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
})
test("continue with missing first name", async({page,inventoryPage, checkoutPage})=>{
    await inventoryPage.addToCart('sauce Labs backpack');
    await inventoryPage.goToCart();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByText('Error: First Name is required')).toBeVisible();
});
test("continue with missing last name", async({page,inventoryPage, checkoutPage})=>{
    await inventoryPage.addToCart('sauce Labs backpack');   
    await inventoryPage.goToCart();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await checkoutPage.fillFirstName('Abhishek');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByText('Error: Last Name is required')).toBeVisible();
});
test("continue with missing zip code", async({page,inventoryPage, checkoutPage})=>{
    await inventoryPage.addToCart('sauce Labs backpack');   
    await inventoryPage.goToCart(); 
    await page.getByRole('button', {name: 'Checkout'}).click();
    await checkoutPage.fillFirstName('Abhishek');
    await checkoutPage.fillLastName('Midha');
    await page.getByRole('button', {name: 'Continue'}).click();
    await expect(page.getByText('Error: Postal Code is required')).toBeVisible();
});