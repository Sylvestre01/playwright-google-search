import test, { expect } from "@playwright/test";
const { Actions, GooglePage, URLs } = require("../utils/imports");

let actions, pGoogle
test.describe("Google Search Tests", () => {
    test.beforeEach( async ({ page }) => {
        actions = new Actions(page);
        pGoogle = new GooglePage(page)
    
        await test.step("Navigate to Google search page", async() => {
          await actions.navigateTo(URLs.Google);
          await page.setViewportSize({ width: 1600, height: 900 });
        })
    })

    test("Verify google search for - MALTA", async({page}) => {
        await pGoogle.enter_google_phrase("Malta");
        await pGoogle.click_search_button();
        // await page.waitForTimeout(60000); //
        // await expect(pGoogle.maltaText()).toHaveText("Malta")
    })

    test("Verify google search for - VALLETA", async({page}) => {
        await pGoogle.enter_google_phrase("Valleta");
        await pGoogle.click_search_button();
        // await page.waitForTimeout(60000); //
        // await expect(pGoogle.valletaText()).toHaveText("Valleta")
    })

    test("Verify google search for - THE MULTIPLE", async({page}) => {
        await pGoogle.enter_google_phrase("The Multiple");
        await pGoogle.click_search_button();
        // await page.waitForTimeout(60000); //
        // await expect(pGoogle.multipleText()).toHaveText("The Multiple")
    })

     /**
       * I am unable to verify (assert) due to Google's security CAPTCHA
       * which violates Google's terms of service
       */
})