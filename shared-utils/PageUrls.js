class PageUrls{

    constructor(){
        const parameters = JSON.parse(JSON.stringify(require('../parameters/planetAuth.json')));
        this.urls = new Map();
        this.urls.set('base', 'https://'+parameters.planet+'.dev.app.reblaze.io/');
        this.urls.set('proxyTemplateNewPage', 'https://'+parameters.planet+'.dev.app.reblaze.io/prod/proxy-templates/new');
        this.urls.set('loginPage', 'https://'+parameters.planet+'.dev.app.reblaze.io/login');
    }

    get(pageName){
        try{
            return this.urls.get(pageName);
        }catch(error){
            console.error('Failed to find requested url', error)
            return this.urls.get('base');
        }

    }
}

export { PageUrls };
