describe('webdriver.io.page', ()=>{
    it('OrangeHRMWebpageValidation', ()=>{
        browser.url('https://opensource-demo.orangehrmlive.com/index.php/dashboard');  
    })
    it('Enter username', ()=>{
        const username = $('input[id=txtUsername]');
    
        console.log(username.addValue('Admin'));
        
       
         
    })
it('Enter password', ()=>{
    const password = $('input[id=txtPassword]');
    console.log(password.addValue('admin123'));
})

it('Click login button',()=>{
    const button = $('input[id=btnLogin]');
    button.waitForClickable({ timeout: 30000 });
    console.log(button.click()); 
})

    })