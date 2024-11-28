describe("Login Functionality",()=>{
    it("Valid Login", ()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/"); 
        cy.get('#btn-make-appointment').click();     
        cy.get('#txt-username') 
        cy.get('#txt-password')
        cy.get('#btn-login').click();
    })

})