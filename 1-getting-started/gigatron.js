describe("Test Suit", function(){

        it("Gigatron Order",function(){



                cy.visit('https://gigatron.rs')
                cy.get('.input').type("iphone 13")
                cy.get(':nth-child(1) > a > .search-link > .inside').click()

                cy.get('[id="grid-products"] div').each(($el, index, $list) =>{

                        $el.find('h4[itemprop="name"]').text()
                        if($el.find('h4[itemprop="name"]').text().includes("APPLE iPhone 13 Pro 128GB Gold"))
                        
                        cy.wrap($el.find('button.buy').click())


                })

        })

    })