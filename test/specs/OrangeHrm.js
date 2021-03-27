describe('webdriver.io.page', ()=>{
    it('OrangeHRMWebpageValidation', ()=>{
        browser.url('https://opensource-demo.orangehrmlive.com/index.php/dashboard');  
    const username = $('input[id=txtUsername]');
    console.log(username.addValue('Admin'));
    timeout: 5000;
    const password = $('input[id=txtPassword]');
    console.log(password.addValue('admin123'));
    })
    })