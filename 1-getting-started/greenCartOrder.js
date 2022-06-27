describe("First Suite", function(){

    it("FruitORder", function(){

            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('input[type="search"]').type('ca')
            cy.get('button[type="submit"]').click()
            cy.wait(2000)
            cy.get(".products").find(".product").eq(3).contains('button[type="button"]', 'ADD TO CART').click()


            cy.get(".products").find(".product").each(($el, index, $list)=> {
                        $el.find('h4.product-name').text()

                        if($el.find('h4.product-name').text().includes("Carrot")) {
                            cy.wrap( $el.find("button")).click()
                        }
            })

            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains("Place Order").click()
            cy.get('.chkAgree').check().should('be.checked')
            cy.get('select').select('Serbia').should('have.value','Serbia')
            cy.get('button').click()

    })
})