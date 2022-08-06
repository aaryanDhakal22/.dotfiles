import cypress from "cypress"

describe('payment',() => {
    it('user can login and logout',()=>{
        expect(true).to.equal(true)
        // visit site
        cy.visit("/")
        // input name
        cy.get('[name="username"]')
        //input password
        cy.get('[name="password"]')
        // click submit
        cy.get('[name="loginButton"]').click()
        //check if logged in 
        cy.get('#logStatus').should("have.text","IN")
        
        // click logout
        //check if logged out

    })
})