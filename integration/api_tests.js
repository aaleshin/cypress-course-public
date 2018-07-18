import {LoginPageAPI} from "../support/pageObjects/loginPageAPI";

describe('API tests', () => {
    it('Edit user phone number', function() {
        LoginPageAPI.login_api()
            .then(() => {
                LoginPageAPI.get_employee_id()
            })
            .then(()=>{
                return LoginPageAPI.edit_user_personal_settings({phone_number: '+444'})
            })
    })
})


