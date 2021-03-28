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
        expect(firstName).toHaveValue('Ramarao');
        firstName.saveScreenshot('./Images//pic1.png');    
    })
    /*@Autor : Ramarao
    Functionality: user click the button
    */
    it('Click the button', ()=>{
        const button=$('button[id=idOfButton]');
        expect(button).toBeDisplayed();
        expect(button).toBeVisible();
        button.click();
        button.saveScreenshot('./Images//pic2.png');
    })
/*@Autor : Ramarao
    Functionality: user click the male radio button
    */
    it('Click the male radio button', ()=>{
        const male=$('input[id=male]');
        male.click();
        expect(male).toBeChecked();
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
    /*@Autor : Ramarao
    Functionality: Handling drag and drop functionality
    */

    it('Handling Drag and drop', ()=>{
        const source=$('img[id=sourceImage]');
        const dest=$('div[id=targetDiv]');
        source.dragAndDrop(dest);
    })

    })