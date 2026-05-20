import { Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async removeFromCart(ProductName: string){
        const formattedName= ProductName.toLowerCase().replaceAll(' ','-');
        await this.page.click(`[data-test="remove-${formattedName}"]`);
    }
    async continueShopping(){
        await this.page.click('[data-test="continue-shopping"]');
    }
    async checkout(){
        await this.page.click('[data-test="checkout"]');
    }
    
}