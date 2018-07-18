const navBar = 'body > div.page__inner > header';
const dropdown__caret = '.dropdown__caret';
var dict = {
    TimeOff: '.dropdown-menu > :nth-child(4) > a'
}

export const MainPage = {
    verifyElements(){
        cy.get(navBar).should('be.visible')
    },
    navigate_to_dropdown_item(item){
        cy.get(dropdown__caret).click()
          .get(dict[item]).click()
    }
};
