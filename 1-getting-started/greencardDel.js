const { cyanBright } = require("colorette")


describe('Suite', function () {

    it('Green Cart Order', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //Validate URL
        cy.url().should('include', 'seleniumPractise')
        cy.get('input[type="search"]').type('be')
        cy.wait(2000)

        //Iterate through list of find elements
        cy.get(".products").find(".product").eq(3).find('button[type="button"]').click()

        cy.get(".products").find(".product").each(($el, index, $list) => {

            const textVar = $el.find('h4[class="product-name"]').text()
            if (textVar.includes('Strawberry')) {
                cy.wrap($el.find("button")).click()
            }
        })
        cy.get('div.brand.greenLogo').then(function (loggoText) {
            const logt = loggoText.text()
            cy.log(logt)
        })

        // Check if 2 ites are in the cart
        cy.get('tbody td:nth-child(3)').eq(0).then(function(price) {
                   const item = price.text()
                   cy.log(item)
                   expect(item).to.equal("2")
        })

        cy.get('tbody tr :nth-child(3)').eq(1).then(function(price) {
            const item = price.text()
            cy.log(item)
            expect(item).to.equal("340")

        //Open link in the same window
        cy.get('[href="#/offers"]').invoke('removeAttr', 'target').click()

        //Select from value from static drop down
        cy.get('select[id="page-menu"]').select('20').should('have.value', 20)

        //Iterate through vege table
        cy.get('tbody tr td:nth-child(1)').each(($el, index, $list) =>{
             const  results= $el.text()
                if(results.includes("Dragon fruit")) {
                    cy.get('tbody tr td:nth-child(2)').eq(index).next().then(function(priceFr) {
                             const discountPrice =   priceFr.text()
                                cy.log(discountPrice)
                    })        
                 }
        })
        cy.go('back')
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').invoke('removeAttr', 'target').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        //Autosuggestive drop down
        cy.get('input[id="autosuggest"]').type("IND")
        cy.get(".ui-menu-item").contains("Indonesia").click()

        //Click on checkboxes
        cy.get('#ctl00_mainContent_chk_friendsandfamily').click().should('be.checked')
        cy.get('input[id="ctl00_mainContent_ddl_originStation1_CTXT"]').click()

        cy.get('div.dropdownDiv ul').find('li').each(($el, index, $list) => {
                const dropdownValues = $el.find('a').text()
                if(dropdownValues.includes('Dibrugarh')) {
                    cy.log($el)
                    cy.wrap($el.click())
                }

            })

 })

       
    })
})