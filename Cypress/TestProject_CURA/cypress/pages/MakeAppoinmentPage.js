//Add class for appoinment page tets case

class MakeAppoinment {
    userAppoinment() {
        cy.get('select').select("Hongkong CURA Healthcare Center") //use ".select" for get data from dropdown
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type("29/11/2024", { delay: 200 });
        cy.get('h2').click();
        cy.get('#txt_comment').type("Add demo text for comment", { delay: 200 });
        cy.get('#btn-book-appointment').click();
    }
}

export default MakeAppoinment; // Export class to use it later