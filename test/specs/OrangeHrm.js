const { expect } = require("chai");


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

it('Subscribe the application',()=>{
    const subscribe = $('input#Subscriber_link');
    subscribe.waitForClickable({ timeout: 30000 });
    subscribe.click();
    const url=browser.getUrl();
    expect(url).to.be.include('https://opensource-demo.orangehrmlive.com/index.php/pim/subscriber');
   
})

    })