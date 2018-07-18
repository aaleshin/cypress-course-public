Cypress.Commands.add('loginByCSRF', (csrfToken) => {
    cy.request({
        method: 'POST',
        url: Cypress.env("host") + '/accounts/login/',
        form: true, // we are submitting a regular form body
        body: {
            username: 'nkopychina',
            password: 'password',
            csrfmiddlewaretoken: csrfToken
        },
        headers: {
            Referer: Cypress.env("host") + '/accounts/login/'
        }
    })
})
