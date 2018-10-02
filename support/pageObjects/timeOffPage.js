const GetTimeOffButton = '.vacation-add-button > .btn'
const TimeOffTypeDropdown = '.vacation-type-select > .form-control'
const PeriodField = '.datepicker'
const StartDateField = 'body > div:nth-child(55) > div.calendar.left > div.daterangepicker_input > input'
const EndDateField = 'body > div:nth-child(55) > div.calendar.right > div.daterangepicker_input > input'
const FirstPriorityApproverField = '.employees-filter__filter-first-priority-approver > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field'
const MessageField = '#form > div.modal-body > div > div.js-type-form-container > div.row > div > textarea'
const SubmitRequestButton = '#form > div.modal-footer > div.form-actions > button.btn.btn-primary.js-submit-request-button'
const WarningModalDialog = '#date-intersection-modal > .modal-dialog > .modal-content'
const WarningSubmitRequestButton = '#date-intersection-modal > div > div > div.modal-footer > div > button.btn.btn-primary.js-continue-request-button'

export const TimeOffPage = {
    click_GetTimeOff_button(){
        cy.get(GetTimeOffButton).click()
    },
    select_time_off_type(type){
        cy.get(TimeOffTypeDropdown).select(type)
    },
    select_time_off_period(start_date, end_date){
        cy.get(PeriodField).click()
            .get(StartDateField).clear().type(start_date)
            .get(EndDateField).clear().type(end_date)
    },
    add_first_priority_approver(approver_name){
        cy.get(FirstPriorityApproverField).click({force: true})
            .type(approver_name)
            .get('.select2-results__options').find('li:first-child').click()

    },
    add_message_for_approvers(message){
        cy.get(MessageField).type(message)
    },
    submit_request(){
        cy.get(SubmitRequestButton).click()
        if (cy.get(WarningModalDialog)){
            cy.get(WarningSubmitRequestButton).click()}
    },
    };
