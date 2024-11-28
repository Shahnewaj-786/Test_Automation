import LoginPage from "../pages/LoginPage" // import for call loginpage class

describe("Login Functionality", () => {
    const loginPage = new LoginPage();
    it("Valid Login", () => {
        loginPage.kuraLogin();
    })
})