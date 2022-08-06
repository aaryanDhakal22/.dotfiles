import cypress from "cypress"

describe('payment',() => {
    it('user can login and logout',()=>{
        expect(true).to.equal(true)
        // visit site
        cy.visit("localhost:3000")

        // input name
        cy.find('textbox')
        //input password
        // click submit
        //check if logged in 
        // click logout
        //check if logged out

    })
})