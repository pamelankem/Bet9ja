/// <reference types="Cypress" />


describe("First test suit", function() {

    it ("Search fruits", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type('ca')
        cy.wait(2000)
        cy.get(".products").find(".product").should('have.length', 4)
        cy.get(".products").find(".product").eq(0).contains('button[type="button"]', 'ADD TO CART').click()


         cy.get(".products").find(".product").each(($el, index, $list)=> {

        const textVar =   $el.find('h4[class="product-name"]').text()    
       if(textVar.includes('Cashews'))  {

      cy.wrap( $el.find("button")).click()

             }
                
    })

    cy.get('.brand.greenLogo').then(function(logoElement)
    {
        cy.log(logoElement.text())
    })


})
})