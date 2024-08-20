class LoginPageLocators{

    constructor(){
        this.locators = new Map();
        this.locators.set('emailInput', '#email');
        this.locators.set('passwordInput', '#password');
        this.locators.set('multiFactorInput', '#milti-factor');
        this.locators.set('sendMeMyCodeButton', '.send-otp');
        this.locators.set('loginButton', '.login-button');
        this.locators.set('azureSsoButton', 'a[href="/auth/reblaze-rnd-azure-login/"]');
    }

    get(locatorName){
        return this.locators.get(locatorName);
    }
}

export { LoginPageLocators };