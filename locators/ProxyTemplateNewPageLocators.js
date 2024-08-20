import { NewPageLocators } from "./NewPageLocators";

class ProxyTemplateNewPageLocators extends NewPageLocators{

    constructor(){
        super();
        this.locators.set('entityDescriptionInput', '[data-qa="description-input"]');
        this.locators.set('clientIpHeaderNameInput', '.ip-header-name');
        this.locators.set('clientMaxBodySizeInput', '.client-max-body-size');
        this.locators.set('largeHeaderSizeInput', '.large-header-size');

    }

}

export { ProxyTemplateNewPageLocators };
