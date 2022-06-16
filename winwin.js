describe("WinWin", function(){
    it("WinWin search product",function(){

        cy.visit('https://www.winwin.rs/?gclid=Cj0KCQjwwJuVBhCAARIsAOPwGATibuQDUkZEBMPQrPUBHSGEmhGebkYvGN3_DwtRycVwwe4rXO3QG84aAiQEEALw_wcB')
        cy.get('input[id="search"]').type("iphone")
        cy.get('.button > .i').click()
        cy.get('ul>li').each(($el, index, $list) => {

            $el.find('h2.product-name').text() 
            
            if($el.find('h2.product-name').text().includes('Apple iPhone 13 Pro Max 6 GB / 256 GB - Alpine Green')) {
                 cy.wrap($el.find('a.product-details')).click()
                 console.log('Milos Milosavljevic')
            
            }
         })
})
})