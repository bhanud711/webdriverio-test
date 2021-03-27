describe('All Testing Website', ()=>{
    it('should open the flipkart url', ()=>{
        browser.url('https://www.testandquiz.com/selenium/testing.html');
        expect(browser).toHaveTitle('Sample Test Page');
    })

    it('provide values', ()=>{
        //const firstName=$('#fname');
        //const button=$('idOfButton');
        //firstName.addvalue('rama');
        //button.click();
        console.log('Its working fine');

    })

    })