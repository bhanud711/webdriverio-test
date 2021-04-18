const { expect } = require("chai");
const { assert } = require("chai");
describe('Frame Handling', ()=>{
    it('Verify the title', ()=>{
        browser.url('http://demo.automationtesting.in/Frames.html');
        //expect(browser).toHaveTitle('Frames');
        const url=browser.getUrl();
        expect(url).to.be.include('http://demo.automationtesting.in/Frames.html');
        assert.equal(url, 'http://demo.automationtesting.in/Frames.html');
    })
    })