import { EditorPageLocators } from "./EditorPageLocators";
import { ProxyTemplateNewPageLocators } from "./ProxyTemplateNewPageLocators";

class ProxyTemplateEditorPageLocators extends ProxyTemplateNewPageLocators{

    constructor(){
        super();
        const editorPageLocators = new EditorPageLocators();
        for (const [key, value] of editorPageLocators) {
            this.locators.set(key, value);
        }
    }

}

export { ProxyTemplateEditorPageLocators };
