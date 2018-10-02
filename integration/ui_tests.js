import {LoginPage} from "../support/pageObjects/loginPage";
import {MainPage} from "../support/pageObjects/mainPage";
import {TimeOffPage} from "../support/pageObjects/timeOffPage";

describe('Time off', function () {
    const login_url = Cypress.env('host')

    //login before each test case
    beforeEach(function () {
        cy.clearCookies()
        cy.visit(login_url)
        LoginPage.login('aaleshin','Kjrjvjn1d()1983')
        MainPage.verifyElements()
    })

  it('Get time off', function () {
      MainPage.navigate_to_dropdown_item('TimeOff')
      TimeOffPage.click_GetTimeOff_button()
      TimeOffPage.select_time_off_type('Parental leave')
      TimeOffPage.select_time_off_period('10/3/2018', '10/5/2018')
      TimeOffPage.add_first_priority_approver('Nataliya Khramova')
      TimeOffPage.add_message_for_approvers('Lorem Ipsum')
      TimeOffPage.submit_request()
  })

})
