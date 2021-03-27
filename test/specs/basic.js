describe('webdriver.io.page', ()=>{
it('Validate Webdriverio page title', ()=>{
    browser.url('https://webdriver.io');
    expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
})
})