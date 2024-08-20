class NewPageLocators {

    constructor(){
        this.locators = new Map();
        this.locators.set('saveEntityButton', '[data-qa="save-changes-button"]');
        this.locators.set('redirectToListButton', '[data-qa="redirect-to-list-button"]');
        this.locators.set('entityNameInput', '[data-qa="name-input"]');
        this.locators.set('toastNotification', '.rbz-notification-text')
    }

    get(locatorName){
        return this.locators.get(locatorName);
    }

}

export { NewPageLocators};