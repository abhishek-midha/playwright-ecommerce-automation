import {Page} from '@playwright/test';

export class CheckoutPage{
    constructor(private page: Page){}

    async fillFirstName(firstName:string){
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }
    async fillLastName(lastName: string){
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }
    async fillZipCode(zip: number){
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip.toString());
    }
}