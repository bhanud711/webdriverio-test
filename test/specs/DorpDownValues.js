describe('DropDown Handling', ()=>{
    it('All Testing Website', ()=>{
        browser.url('https://www.testandquiz.com/selenium/testing.html');
         const dropdown = $$('select[id="testingDropdown"] option');     
        dropdown.map((element)=>console.log(element.getText()))    
    })
    })