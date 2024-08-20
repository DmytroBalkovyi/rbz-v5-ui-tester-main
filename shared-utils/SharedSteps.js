
const fs = require('fs');
const yaml = require('js-yaml');

class SharedSteps {

    //Set X-Token cookie for context
    static async login_with_parameters(browser) {
        const parameters = JSON.parse(JSON.stringify(require('../parameters/planetAuth.json')));
        if (!browser || typeof browser.newContext !== 'function') {
            console.log('SharedSteps:Invalid browser object');
        }
        const context = await browser.newContext();
        if (!context || typeof context.newPage !== 'function') {
            console.log('SharedSteps:Invalid context object');
        }
        const domain = parameters.planet + '.dev.app.reblaze.io';
        await context.addCookies([{
            name: 'X-Token',
            value: parameters.xToken,
            domain: domain, // Make sure this matches the domain you are visiting
            path: '/',
            sameSite: 'Lax',
            secure: true, // Only send the cookie over HTTPS
        }]);
        return context;

    }

    //Read YAML file to javascript object
    static readYAML(filename) {
        try {
            // Load the YAML file
            const fileContents = fs.readFileSync(filename, 'utf8');
            // Parse the YAML content into a JavaScript object
            const data = yaml.load(fileContents);
            return data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    //extract specific category from javascript object that was read from YAML file
    static extract_values_for(data, name) {
        for (const category in data) {
            if (category === name) {
                return data[category];
            }
            return null
        }
    }
}

export { SharedSteps };