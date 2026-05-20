import { Page } from '@playwright/test';

export class SlidebarPage {
    constructor(private page: Page) {}

    async clickAllItems() {
        await this.page.click('#inventory_sidebar_link');
    }

    async clickAbout() {
        await this.page.click('#about_sidebar_link');
    }

    async clickLogout() {
        await this.page.click('#logout_sidebar_link');
    }

    async clickResetAppState() {
        await this.page.click('#reset_sidebar_link');
    }
}
