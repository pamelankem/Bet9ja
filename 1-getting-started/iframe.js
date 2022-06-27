
import 'cypress-iframe'

describe("First Suite", function(){

    it("Handling Iframe", function(){

            cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
            cy.frameLoaded("#courses-iframe")
            cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})