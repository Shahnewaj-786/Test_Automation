describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://6ammart-react.6amtech.com/')
    cy.get('.MuiStack-root > .MuiButton-contained').click()
    //cy.get('.MuiFormControl-root > .MuiInputBase-root').type("Dhanmondi")
    //cy.get(':nth-child(1) > .MuiPaper-root > .mui-style-49c7dn').click()
    cy.get('.mui-style-ohsyfb > .MuiTypography-root').click()
    cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get(':nth-child(2) > .MuiPaper-root').click()
    cy.get('.MuiAvatar-root').click()
    /*cy.get('.selected-flag').type('Bangladesh').click()
    cy.get('.form-control').type('8801621720045')
    cy.get('.MuiFormControl-root > .MuiInputBase-root').type('12345678', {delay: 100})
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('#recaptcha-container').click()*/
    cy.get('.mui-style-llswic > a').click()
    cy.get(':nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').type('First', {delay: 10})
    cy.get(':nth-child(2) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').type('Name', {delay: 10})
    cy.get(':nth-child(3) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').type('abcdef@gmail.com', {delay: 10})
    cy.get('.form-control').type('122334499', {delay: 10})
    cy.get(':nth-child(5) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').type('12345678', {delay: 10})
    cy.get(':nth-child(6) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').type('12345678', {delay: 10})
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('form > :nth-child(1) > .mui-style-1rz5sco').click()
    /*cy.get('.MuiTypography-root > a').click()
    cy.get('.form-control').type('12233445566')
    cy.get('.MuiFormControl-root > .MuiInputBase-root').type('12345678')
    cy.get('.PrivateSwitchBase-input').click()
    cy.get('#recaptcha-container').click()*/
  })
})