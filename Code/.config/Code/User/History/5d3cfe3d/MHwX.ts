import cypress from "cypress"

describe('payment',() => {
    it('user can login and logout',()=>{
        expect(true).to.equal(true)
        // visit site
        cy.visit("/")
        // input name
        cy.get('[input name="username"]')
        //input password
        cy.get('[input name="password"]')
        // click submit
        cy.get('[input name="password"]')
        //check if logged in 
        // click logout
        //check if logged out

    })
})