import { Actions } from "../utils/actions"

let actions
export class GooglePage {
    constructor(page) {
        this.page = page
        actions = new Actions(page)
        this.googleSearchInput = this.page.getByLabel('Search', { exact: true })
        this.googleSearchButton = this.page.getByLabel('Google Search').first()
        this.headingMalta = this.page.getByRole('heading', { name: 'Malta', exact: true })
        this.headingValleta = this.page.getByRole('heading', { name: 'Valleta', exact: true })
        this.headingMultiple = this.page.getByRole('heading', { name: 'The Multiple', exact: true })

    } 

    async enter_google_phrase(sPhrase) {
        actions.enterText(this.googleSearchInput, sPhrase)
    }

    async click_search_button() {
        await Promise.all([
            this.page.waitForNavigation(),
            actions.clickElement(this.googleSearchButton) 
        ])
    }

    async maltaText(){
        return this.headingMalta;
    }

    async valletaText(){
        return this.headingValleta;
    }

    async multipleText(){
        return this.headingMultiple;
    }


}