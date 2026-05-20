import { test, expect } from "../fixtures/test-fixtures";
import {data} from "../utils/users";
test.beforeEach(async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login(data.validUser.username, data.validUser.password);
})
test("validate twitter link", async({footerPage,page})=>{
   const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        footerPage.clickTwitter()
    ]);
    await expect(newPage).toHaveURL('https://x.com/saucelabs');    
})
test("validate facebook link", async({footerPage,page})=>{
    const newPagePromise = page.context().waitForEvent('page');
    await footerPage.clickFacebook();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs');
});
test("validate linkedin link", async({footerPage,page})=>{
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        footerPage.clickLinkedIn()
    ]);
    await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
});