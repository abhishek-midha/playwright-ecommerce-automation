import { InventoryPage } from "../pages/InventoryPage";
import {LoginPage} from "../pages/LoginPage";
import { SlidebarPage } from "../pages/SlidebarPage";
import { FooterPage } from "../pages/FooterPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import {test as base} from "@playwright/test";

type Fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    slidebarPage: SlidebarPage
    footerPage: FooterPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    },
    inventoryPage: async({page}, use)=>{
        await use(new InventoryPage(page));
    },
    slidebarPage: async({page}, use)=>{
        await use(new SlidebarPage(page));
    },
    footerPage: async({page}, use)=>{
        await use(new FooterPage(page));
    },
    cartPage: async({page}, use)=>{
        await use(new CartPage(page))
    },
    checkoutPage: async({page}, use)=>[
        await use(new CheckoutPage(page))
    ]
});
export {expect} from "@playwright/test";
