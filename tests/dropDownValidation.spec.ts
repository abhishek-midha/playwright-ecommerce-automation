import {test, expect} from "../fixtures/test-fixtures.ts";
import { data } from "../utils/users.ts";
test.beforeEach(async({loginPage,page})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
    await expect(page.locator('.inventory_list')).toBeVisible();
})
test("validate drop down options", async({inventoryPage})=>{
    const dropdownOptions = await inventoryPage.dropDownOptions();
    expect(dropdownOptions).toEqual(["Name (A to Z)", "Name (Z to A)", "Price (low to high)", "Price (high to low)"]);
})
test('sort products by name in ascending order', async({inventoryPage})=>{
    await inventoryPage.sortBy("Name (A to Z)");
    const productNames = await inventoryPage.productNames();
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames);
})
test('sort products by name in descending order', async({inventoryPage})=>{
    await inventoryPage.sortBy("Name (Z to A)");
    const productNames = await inventoryPage.productNames();
    const sortedNames = [...productNames].sort().reverse();
    expect(productNames).toEqual(sortedNames);
});
test('sort products by price in ascending order', async({inventoryPage})=>{
    await inventoryPage.sortBy("Price (low to high)");
    const productPrices = await inventoryPage.productPrices();
    const sortedPrices = [...productPrices].sort((a, b) => a - b);
    expect(productPrices).toEqual(sortedPrices);
});
test('sort products by price in descending order', async({inventoryPage})=>{
    await inventoryPage.sortBy("Price (high to low)");
    const productPrices = await inventoryPage.productPrices();
    const sortedPrices = [...productPrices].sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPrices);
});