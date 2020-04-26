describe('Accepts input',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it("Allows for input - TextBox input 1",()=>{
        const input = '123'
        cy.get(".inputValue:first").type(input).should("have.value",input)
    })
})
