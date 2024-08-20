const { expect } = require('@playwright/test');
import { ProxyTemplateNewPageLocators } from "../locators/ProxyTemplateNewPageLocators";

class ProxyTemplateNewPageObject{
    constructor(page, pageUrls){
        this.proxyTemplatePageLocators = new ProxyTemplateNewPageLocators(); 
        this.pageUrls = pageUrls;
        this.page = page;
        this.notificationMessages = JSON.parse(JSON.stringify(require('../test-data/proxy_template_notification_messages.json')));

    }

    async fill_input(field_name, input){
        await this.page.locator(this.proxyTemplatePageLocators.get(field_name)).fill(input);
    }

    async get_input(field_name){
        return await this.page.locator(this.proxyTemplatePageLocators.get(field_name)).inputValue();
    }

    async verify_notification(type){
        let msg = "undefined";
        for (const message of this.notificationMessages){
            if (message.key == type){
              msg = message.value;
            }
          }
        const loc = this.proxyTemplatePageLocators.get("toastNotification");
        return await expect (this.page.locator(loc)).toHaveText(msg);
    }

    async goTo(){
        const url = this.pageUrls.get('proxyTemplateNewPage');
        await this.page.goto(url);
    }

    async save_entity(){
        await this.page.locator(this.proxyTemplatePageLocators.get("saveEntityButton")).click();
    }
}

export { ProxyTemplateNewPageObject };
