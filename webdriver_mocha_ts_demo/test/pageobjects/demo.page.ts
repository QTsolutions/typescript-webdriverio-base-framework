import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DemoPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get fullName () {
        return $('#userName');
    }

    public get userEmail () {
        return $('#userEmail');
    }

    public get currentAddress () {
        return $('#currentAddress');
    }

    public get permanentAddress () {
        return $('#permanentAddress');
    }

    public get btnSubmit () {
        return $('#submit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    public async enterDetails (username: string, userEmail: string, currentAddress: string , permanentAddress: string) {
        await this.fullName.setValue(username);
        await this.userEmail.setValue(userEmail);
        await this.currentAddress.setValue(currentAddress);
        await this.permanentAddress.setValue(permanentAddress);
        await this.btnSubmit.click();
        await browser.setTimeout({ 'script': 10000 })
        await browser.executeAsync((done) => {
            console.log('this should not fail')
            setTimeout(done, 10000)
           
})        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new DemoPage();
