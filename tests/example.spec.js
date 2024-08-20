
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const yaml = require('js-yaml');
import { ProxyTemplateNewPageObject } from "../page-objects/ProxyTemplateNewPageOpject";
import { PageUrls } from "../shared-utils/PageUrls";
import { SharedSteps } from "../shared-utils/SharedSteps";

const pageUrls = new PageUrls();
const header_key_valid_values = JSON.parse(JSON.stringify(require('../test-data/header_key_valid_values.json')));
const header_key_invalid_values = JSON.parse(JSON.stringify(require('../test-data/header_key_invalid_values.json')));
//const large_header_size_valid_values = JSON.parse(JSON.stringify(require('../test-data/proxy_template_large_header_size_valid_values.json')));
const large_header_size_invalid_values = JSON.parse(JSON.stringify(require('../test-data/proxy_template_large_header_size_invalid_values.json')));
const proxy_template_test_values = SharedSteps.readYAML('./test-data/proxy_template_test_values.yaml');
const large_header_size_valid_values = SharedSteps.extract_values_for(proxy_template_test_values, "large_header_size_valid_values");


/*
test.beforeAll(async ({ browser }) => {
  global.__context = await SharedSteps.login_with_parameters(browser);
  if (!global.__context || typeof global.__context.newPage !== 'function') {
    console.log('proxy-template-example.spec.js:Invalid global.__context object');
}
})
*/
for (const item of large_header_size_valid_values) {
  test(`Test Large header size - valid key: ${item.key}`, async () => {
    // const page = await global.__context.newPage();
    //const proxyTemplateNewPage = new ProxyTemplateNewPageObject(page, pageUrls);
    //console.log(proxy_template_test_values);
    console.log(`Key: ${item.key}, Value: ${item.value}`);

  });
}

