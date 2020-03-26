
describe("Test our inputs and submit our form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("Add text to inputs and submit form", () => {
        cy.get('input[name="name"]')
          .type("Robert")
          .should("have.value", "Robert");
        cy.get("input[name='email']")
            .type("test@email.com")
            .should("have.value", "test@email.com")    
        // cy.get("input[name='password']")
        //     .type("test123")
        //     .should("have.value", "test123")
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
        cy.get('form')
            .submit()
    
    })
})