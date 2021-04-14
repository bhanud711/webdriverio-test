describe('Medical Plussmart', ()=>{
    it('Validating mediplus website', ()=>{
        browser.url('https://www.medplusmart.com/');
        expect(browser).toHaveTitle('Online Pharmacy Store in India. Best value on medicines - MedPlusMart');
    })
    })