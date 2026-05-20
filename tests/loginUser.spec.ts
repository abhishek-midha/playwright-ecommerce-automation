import {test} from "../fixtures/test-fixtures.ts";
import {data} from "../utils/users";

test("user with valid credentials @smoke", async({loginPage})=>{
    await loginPage.goto()
    await loginPage.login(data.validUser.username, data.validUser.password);
})
test("user with invalid credentials @smoke", async({loginPage})=>{
    await loginPage.goto()
    await loginPage.login(data.invalidUser.username, data.invalidUser.password);
})