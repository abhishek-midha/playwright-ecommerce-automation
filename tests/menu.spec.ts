import {test,expect} from "../fixtures/test-fixtures.ts";
import {data} from "../utils/users.ts";

test.beforeEach(async({loginPage,page})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
    await expect(page.locator('.inventory_list')).toBeVisible();
})

test("validate menu options", async({inventoryPage,page})=>{
    await inventoryPage.openMenu();
    await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
})
test("validate about link", async({inventoryPage,slidebarPage,page})=>{
    await inventoryPage.openMenu();
    await slidebarPage.clickAbout();
    await expect(page).toHaveURL('https://saucelabs.com/');
});
test("validate logout link", async({inventoryPage, slidebarPage, page})=>{
    await inventoryPage.openMenu();
    await slidebarPage.clickLogout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})
test("validate reset app state link", async({inventoryPage, slidebarPage, page})=>{
    await inventoryPage.addToCart('sauce labs backpack');
    await inventoryPage.openMenu(); 
    await slidebarPage.clickResetAppState();
    await inventoryPage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(0);
});