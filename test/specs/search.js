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
        firstName.saveScreenshot('./Images//pic1.png');
        firstName.addValue('Ramarao');    
    })
    /*@Autor : Ramarao
    Functionality: user click the button
    */
    it('Click the button', ()=>{
        const button=$('button[id=idOfButton]');
        button.saveScreenshot('./Images//pic2.png');
        button.click();
    })
/*@Autor : Ramarao
    Functionality: user click the male radio button
    */
    it('Click the male radio button', ()=>{
        const button=$('input[id=male]');
        button.click();
    })

    /*@Autor : Ramarao
    Functionality: Handling drop down
    */
    it('Select DropDown Value', ()=>{
        const selectBox=$('select[id=testingDropdown]');
        console.log(selectBox.getText('option:checked')); 
        selectBox.selectByVisibleText('Manual Testing');
        console.log(selectBox.getText('option:checked'));
    })

    })