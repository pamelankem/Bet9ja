describe("Test Suite", function() {

    it("Dropdown", function(){


        cy.visit('https://www.winwin.rs')
        cy.wait(2000)
        cy.get('.skip-action.account-button').trigger('mouseover')
        cy.get('.account-register').click()
        cy.wait(2000)
        cy.get('#firstname').type('TEST')
        cy.get('#lastname').type('TESTIC')
        cy.get('[name="email"]').type('adasasd@dasda.das')

        cy.get('#phone-pref-county').find('.dd-option').each(($el, index, $list) => {

                const countryPrefix = $el.find('.value-prefix-label').text()

                if(countryPrefix.includes('Congo')) {
                    cy.wrap($el.click())
                }


        })
      
        cy.get('.input-text.phone-prefix').type('66')
        cy.get('.input-text.phone-value').type('9784345')

        cy.get('[name="password"]').type('asasdada')
        cy.get('[name="confirmation"]').type('asasdada')

        cy.get('input[name="is_subscribed"]').check()
        cy.get('input[name="is_subscribed_phone"]').check()
        cy.get('input[name="is_privacy_policy"]').check()
        cy.get('button[type="submit"]').click()


        })
        })






















