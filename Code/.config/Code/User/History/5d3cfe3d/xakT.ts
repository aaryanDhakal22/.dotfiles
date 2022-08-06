import cypress from "cypress"

describe('payment',() => {
    beforeEach(()=>{
        cy.visit("/")
    })
    it('user can login and logout',()=>{
        // visit site
        
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