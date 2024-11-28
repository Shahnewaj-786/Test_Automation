//Add class for login page tets case

class LoginPage {
    kuraLogin() {
        //Transfer login functionality to this login class
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type("John Doe", { delay: 200 });
        cy.get('#txt-password').type("ThisIsNotAPassword", { delay: 50 });
        cy.get('#btn-login').click();
    }
}

export default LoginPage; // EXPORT FOR USE THIS CLASS INTO ANOTHER FILE