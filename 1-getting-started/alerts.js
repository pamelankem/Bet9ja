describe("Suite", function(){

it("Check alerst", function(){

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()

        cy.get('#confirmbtn').click()
        cy.on('window:alert', (string) => {

                expect(string).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on('window:confirm', (string) => {

                expect(string).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click( )

        cy.url().should('include','rahulshettyacademy')

        cy.go('back')

        cy.url().should('include', 'AutomationPractice')


})

})