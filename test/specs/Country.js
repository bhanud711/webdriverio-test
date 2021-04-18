describe('IHG Website', ()=>{
    it('All Country Names', ()=>{
        browser.url('https://www.ihg.com/rewardsclub/gb/en/enrollment/join');
         const dropdown = $$('select[id="country"] option');     
        //dropdown.map((element)=>console.log(element.getText()));
        console.log("The Total Countries avilable in IHG Website is "+dropdown.length);
    })
    it('Enter FirstName',()=>{
        const name=$('input[id="firstName"]');
        console.log("Enter name"+name.addValue('Ramarao'));

    })
    it('Enter LastName',()=>{
        const name=$('input[id="lastName"]');
        console.log("Enter surname"+name.addValue('Ramarao'));
    })
    it('Enter EmailAddress',()=>{
        const name=$('input[id="email"]');
        console.log("Enter email name"+name.addValue('ramaraod711@gmail.com'));
    })
    it('Enter verifyEmailAddress',()=>{
        const name=$('input[id="confirmEmail"]');
        console.log("Enter confirm email name"+name.addValue('ramaraod711@gmail.com'));
    })

    it('Enter Street',()=>{
        const name=$('input[id="address1"]');
        console.log("Enter address"+name.addValue('SivaNagaRajuColony'));
    })

    it('Enter City',()=>{
        const name=$('input[id="city"]');
        console.log("Enter city"+name.addValue('Hyderabad'));
    })

    })