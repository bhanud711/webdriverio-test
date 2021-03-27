describe('All Testing Website', ()=>{
    it('Open the All testing Website', ()=>{
        browser.url('https://www.testandquiz.com/selenium/testing.html');
        expect(browser).toHaveTitle('Sample Test Page');
    })
/*@Autor : Ramarao
    Functionality: provide text field value
    */
    it('provide value to textfield', ()=>{
        const firstName=$('input[id=fname]');
        firstName.addValue('Ramarao');    
    })
    /*@Autor : Ramarao
    Functionality: user click the button
    */
    it('Click the button', ()=>{
        const button=$('button[id=idOfButton]');
        button.click();
    })
/*@Autor : Ramarao
    Functionality: user click the male radio button
    */
    it('Click the male radio button', ()=>{
        const button=$('input[id=male]');
        button.click();
    })

    })