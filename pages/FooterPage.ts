import {Page} from '@playwright/test';

export class FooterPage {
    constructor(private page: Page){}

    async clickTwitter(){
        await this.page.getByRole('link', {name: 'Twitter'}).click();
    }
    async clickFacebook(){
        await this.page.getByRole('link', {name: 'Facebook'}).click();
    }
    async clickLinkedIn(){
        await this.page.getByRole('link', {name: 'LinkedIn'}).click();
    }   
}