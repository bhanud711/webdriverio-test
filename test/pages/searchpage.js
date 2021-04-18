const { default: page } = require("../pages/page");
class searchpage extends page
{
    
    open()
    {
        super.open('https://opensource-demo.orangehrmlive.com/index.php/dashboard');
    }

    get enterUserName()
    {
        return $('input[id=txtUsername]');
    }

    get enterPassword()
    {
        return $('input[id=txtPassword]');
    }

    get clickButton()
    {
        return $('input[id=btnLogin]');
    }

}
export default new searchpage();