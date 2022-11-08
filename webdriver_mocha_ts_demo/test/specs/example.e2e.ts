import demoPage from '../pageobjects/demo.page';

describe("Preksha's demo Application", () => {
    it('open demoQA url', async () => {
        await demoPage.open();
        await expect(browser).toHaveUrl("https://demoqa.com/text-box");
    });

    it("Enter preksha's details and check submit button is clickable", async () => {
        await demoPage.enterDetails('Preksha Vora', 'preksha@gmail.com', 'Rose Villa','India'); 
        const submitBtn = await $('#submit');
        await expect(submitBtn).toBeClickable();
    });

    it("check output box displayed ", async () => {
        let elem = await $('#output');
        await expect(elem).toBeDisplayed();
    });

    it("validate name ", async () => {
        let nameValue = await $('#name');
        await expect(nameValue).toHaveText("Name:Preksha Vora");
    });

    it("validate email ", async () => {
        let emailValue = await $('#email');
        await expect(emailValue).toHaveText("Email:preksha@gmail.com");  
    });

    it("validate currentAddress ", async () => {
        let curAddressValue = await $("//p[@id='currentAddress']");
        await expect(curAddressValue).toHaveText("Current Address :Rose Villa");  
    });

    it("validate permanentAddress ", async () => {
        let permanentAddressValue = await $("//p[@id='permanentAddress']");
        await expect(permanentAddressValue).toHaveText("Permananet Address :India");  
    });
    
});


