
const { test, expect } = require('@playwright/test');
import { ProxyTemplateNewPageObject } from "../page-objects/ProxyTemplateNewPageOpject";
import { PageUrls } from "../shared-utils/PageUrls";
import { SharedSteps } from "../shared-utils/SharedSteps";

const pageUrls = new PageUrls();
//extract values for tests from YAML file
const proxy_template_test_values = SharedSteps.readYAML('./test-data/proxy_template_test_values.yaml');
const large_header_size_valid_values = SharedSteps.extract_values_for(proxy_template_test_values, "large_header_size_valid_values");
//extract values for tests from JSON file
const header_key_valid_values = JSON.parse(JSON.stringify(require('../test-data/header_key_valid_values.json')));
const header_key_invalid_values = JSON.parse(JSON.stringify(require('../test-data/header_key_invalid_values.json')));
const large_header_size_invalid_values = JSON.parse(JSON.stringify(require('../test-data/proxy_template_large_header_size_invalid_values.json')));

test.beforeAll(async ({ browser }) => {
  //set x-token cookie from parameters file
  global.__context = await SharedSteps.login_with_parameters(browser);
  if (!global.__context || typeof global.__context.newPage !== 'function') {
    console.log('proxy-template-example.spec.js:Invalid global.__context object');
  }
})

test.describe.configure({ mode: "parallel" });

//check valid values for clientIpHeaderName
for (const data of header_key_valid_values) {
  test(`Test Client IP header name - valid key: ${data.key}`, async () => {
    const page = await global.__context.newPage();
    const proxyTemplateNewPage = new ProxyTemplateNewPageObject(page, pageUrls);
    await proxyTemplateNewPage.goTo(page);
    await proxyTemplateNewPage.fill_input("entityNameInput", "clientIpHeaderName" + data.key);
    await proxyTemplateNewPage.fill_input("clientIpHeaderNameInput", data.value);
    await proxyTemplateNewPage.save_entity();
    await proxyTemplateNewPage.verify_notification("create_success");
  });
}

//check invalid values for clientIpHeaderName
for (const data of header_key_invalid_values) {
  test.skip(`Test Client IP header name - invalid key: ${data.key}`, async () => {
    const page = await global.__context.newPage();
    const proxyTemplateNewPage = new ProxyTemplateNewPageObject(page, pageUrls);
    await proxyTemplateNewPage.goTo(page);
    await proxyTemplateNewPage.fill_input("entityNameInput", "clientIpHeaderName" + data.key);
    await proxyTemplateNewPage.fill_input("clientIpHeaderNameInput", data.value);
    await proxyTemplateNewPage.save_entity();
    await proxyTemplateNewPage.verify_notification("create_failure");
  });
}

for (const data of large_header_size_valid_values) {
  test(`Test Large header size - valid key: ${data.key}`, async () => {
    const page = await global.__context.newPage();
    const proxyTemplateNewPage = new ProxyTemplateNewPageObject(page, pageUrls);
    await proxyTemplateNewPage.goTo(page);
    await proxyTemplateNewPage.fill_input("entityNameInput", "largeHeaderSize_" + data.key);
    await proxyTemplateNewPage.fill_input("largeHeaderSizeInput", data.value);
    await proxyTemplateNewPage.save_entity();
    await proxyTemplateNewPage.verify_notification("create_success");
  });
}

for (const data of large_header_size_invalid_values) {
  test(`Test Large header size - invalid key: ${data.key}`, async () => {
    const page = await global.__context.newPage();
    const proxyTemplateNewPage = new ProxyTemplateNewPageObject(page, pageUrls);
    await proxyTemplateNewPage.goTo(page);
    await proxyTemplateNewPage.fill_input("entityNameInput", "largeHeaderSize_" + data.key);
    await proxyTemplateNewPage.fill_input("largeHeaderSizeInput", data.value);
    await proxyTemplateNewPage.save_entity();
    await proxyTemplateNewPage.verify_notification("create_failure");
  });
}
