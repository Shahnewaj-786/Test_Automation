import LoginPage from "../pages/LoginPage";
import MakeAppoinment from "../pages/MakeAppoinmentPage";

describe("Make Appoinment", () => {
    const loginPage = new LoginPage();
    const makeAppoinment = new MakeAppoinment();

    //Use beforeEach function to save cache, local storage and other after run a test
    beforeEach(() => {
        loginPage.kuraLogin();
    })

    it("Make Appoinment", () => {
        makeAppoinment.userAppoinment();
    })
})