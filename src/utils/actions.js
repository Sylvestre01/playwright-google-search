import { expect } from "@playwright/test";
export class Actions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
    }

    async navigateTo(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async clickElement(element) {
        await element.click()
    }

    
    async enterText(locator, text) {
        await locator.fill(text)
    }

    
    async verifyElementMatch(locator, element) {
        expect(locator).toContain(element);
    }
}