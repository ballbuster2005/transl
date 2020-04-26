describe('Transliterates the right way',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Properly transliterate привет',()=>{
        cy.get(".inputValue").eq(0).clear().type("привет")
        cy.get(".button").eq(0).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Transliteration: privet')
    })

    it('Properly transliterates до свидания',()=>{
        cy.get(".inputValue").eq(0).clear().type("до свидания")
        cy.get(".button").eq(0).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Transliteration: do svidaniya')
    })
})
