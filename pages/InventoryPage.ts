import { expect, Page } from "@playwright/test";

export class InventoryPage {
    constructor(private page: Page) {}
    async dropDownOptions() {
    const dropdown = this.page.getByRole('combobox');
    await expect(dropdown).toBeVisible();
    return await dropdown.locator('option').allTextContents();
}
    async sortBy(option: string){
        const dropdown = this.page.getByRole('combobox');
        await dropdown.selectOption(option);
    }
    async addToCart(ProductName: string){
        const formattedName= ProductName.toLowerCase().replaceAll(' ', '-');
        await this.page.click(`[data-test="add-to-cart-${formattedName}"]`);
    }
    async goToCart(){
        await this.page.click('.shopping_cart_link');
    }
    async openMenu(){
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }
    async productNames(){
        const names = await this.page.locator('.inventory_item_name').allTextContents();
        return names;
    }
    async productPrices(){
        const prices = await this.page.locator('.inventory_item_price').allTextContents();
        return prices.map(p => parseFloat(p.replace('$', '')));
    }

}