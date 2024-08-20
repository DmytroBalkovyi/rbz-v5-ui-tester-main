import { LoginPageLocators } from "../locators/LoginPageLocators";

class LoginPageObject {

    constructor(page, pageUrls) {
        this.loginPageLocators = new LoginPageLocators();
        this.pageUrls = pageUrls;
        this.page = page;
    }

    async fill_input(input_name, input) {
        await this.page.locator(this.loginPageLocators.get(input_name)).fill(input);
    }

    async click_button(button_name) {
        await this.page.locator(this.loginPageLocators.get(button_name)).click();
    }

    async goTo() {
        const url = this.pageUrls.get('loginPage');
        await this.page.goto(url);
    }

    async login_with_email(email, password) {
        this.goTo();
        this.fill_input('email', email);
        this.fill_input('password', password);
        this.click_button('loginButton');
    }

    async login_with_azure_sso() {
        this.goTo();
        this.click_button('azureSsoButton');
    }

}

export { LoginPageObject };