describe('Test Suite', function(){

    it("WinWin search product",function(){

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('.inputs.ui-autocomplete-input').type('se')
        cy.wait(2000)

        cy.get('.ui-menu-item div').each(($el, intex, $list) =>{

            if($el.text()=="Senegal") {
                $el.click()
            }

        })

    })

})


