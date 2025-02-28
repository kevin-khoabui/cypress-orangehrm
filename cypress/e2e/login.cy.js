import LoginPage from "../support/pageObjects/loginpage";
import DashboardPage from "../support/pageObjects/dashboardpage";
import ResetPasswordPage from "../support/pageObjects/resetpasswordpage";


describe ('Login',()=>{

    // Before running the test, we need to visit the homepage
    beforeEach(()=>{
        cy.visit('/') // this will visit homepage because we have already set the base URL in cypress.config.js
        //cy.intercept("POST", "**/auth/login").as("loginRequest");
    })


    /* "TC_001 - Login with valid username and password" 
    Steps 
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter valid username in the "Username" field
    3. Enter valid password in the "Password" field
    4. Click on the Login button
    5. Verify that the dashboard page is displayed
    6. Verify that the user is logged in successfully
    */

    it("TC_001: Login with valid username and password", () => {
        cy.get(LoginPage.usernameInput).type(Cypress.env("validUsername"))
        cy.get(LoginPage.passwordInput).type(Cypress.env("validPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.url().should("include","/dashboard/index") // Verify that dashboard page is displayed
        cy.get(DashboardPage.userProfileDropdown).should('be.visible') // Verify that user is logged in successfully
     
    })

    /* TC_002_Login with invalid username and valid password
    
    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter an invalid username in the "Username" field
    3. Enter a valid password in the "Password" field
    4. Click on the Login button
    5. Verify that an error message appears: "Invalid credentials"
    */

    it("TC_002: Login with invalid username and valid password",() =>{
        cy.get(LoginPage.usernameInput).type(Cypress.env("invalidUsername"))
        cy.get(LoginPage.passwordInput).type(Cypress.env("validPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.get(LoginPage.invalidCredentialsMessage).should("be.visible")
        .and("have.text","Invalid credentials") // Verify that an error message appears: "Invalid credentials"
    })

    /* TC_003_Login with valid username and invalid password	
    
    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter a valid username in the ""Username"" field
    3. Enter an invalid password in the ""Password"" field
    4. Click on the Login button
    5. Verify that an error message appears: "Invalid credentials"
    */

    it("TC_003: Login with valid username and invalid password",() => {
        cy.get(LoginPage.usernameInput).type(Cypress.env("validUsername"))
        cy.get(LoginPage.passwordInput).type(Cypress.env("invalidPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.get(LoginPage.invalidCredentialsMessage).should("be.visible")
        .and("have.text","Invalid credentials") // Verify that an error message appears: "Invalid credentials"
    })

    /* TC_004_Login with invalid username and invalid password
    
    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter an invalid username in the ""Username"" field
    3. Enter an invalid password in the ""Password"" field
    4. Click on the Login button
    5. Verify that an error message appears: "Invalid credentials"
    */

    it("TC_004: Login with invalid username and invalid password",() =>{
        cy.get(LoginPage.usernameInput).type(Cypress.env("invalidUsername"))
        cy.get(LoginPage.passwordInput).type(Cypress.env("invalidPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.get(LoginPage.invalidCredentialsMessage).should("be.visible")
        .and("have.text","Invalid credentials") // Verify that an error message appears: "Invalid credentials"
    })

    /* TC_005_Login with empty username and password
    
    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Leave the "Username" field empty
    3. Leave the "Password" field empty
    4. Click on the Login button
    5. Verify that error messages appear for both fields: "Required"
    */

    it("TC_005: Login with empty username and password",() =>{
      cy.get(LoginPage.usernameInput).clear() // Clear username field to ensure this field is empty
      cy.get(LoginPage.passwordInput).clear() // Clear password field to ensure this field is empty
      cy.get(LoginPage.loginButton).click()
      cy.xpath(LoginPage.usernameRequiredMessage).should("be.visible")
      .and("have.text","Required") // Verify that error messages appear for username field: "Required"
      cy.xpath(LoginPage.passwordRequiredMessage).should("be.visible")
      .and("have.text","Required") // Verify that error messages appear for password field: "Required"
    })

    /* TC_006_Login with only username filled, password empty

    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter a valid username in the "Username" field
    3. Leave the "Password" field empty
    4. Click on the Login button
    5. Verify that an error message appears: "Required"
    */

    it("TC_006: Login with only username filled, password empty",() =>{
        cy.get(LoginPage.usernameInput).type(Cypress.env("validUsername"))
        cy.get(LoginPage.passwordInput).clear() // Clear password field to ensure this field is empty
        cy.get(LoginPage.loginButton).click()
        cy.xpath(LoginPage.passwordRequiredMessage).should("be.visible")
        .and("have.text","Required") // Verify that error messages appear for password field: "Required"
      })

    /* TC_007_Login with only password filled, username empty

    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Leave the "Username" field empty
    3. Enter a valid password in the "Password" field
    4. Click on the Login button
    5. Verify that an error message appears: "Required"
    */

    it("TC_007: Login with only password filled, username empty", () =>
        {
        cy.get(LoginPage.usernameInput).clear() // Clear username field to ensure this field is empty
        cy.get(LoginPage.passwordInput).type(Cypress.env("validPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.xpath(LoginPage.usernameRequiredMessage).should("be.visible")
        .and("have.text","Required") // Verify that error messages appear for username field: "Required"
        })
    
    /* TC_008 - Login and then logout successfully
    Steps:
    1. Open the browser and navigate to OrangeHRM login page
    2. Enter valid username in the "Username" field
    3. Enter valid password in the "Password" field
    4. Click on the Login button
    5. Verify that the dashboard page is displayed
    6. Click on the User Profile Dropdown
    7. Click on the Logout button
    8. Verify that the login page is displayed again
    */

    it("TC_008: Login and then logout successfully",()=>{
        cy.get(LoginPage.usernameInput).type(Cypress.env("validUsername"))
        cy.get(LoginPage.passwordInput).type(Cypress.env("validPassword"))
        cy.get(LoginPage.loginButton).click()
        cy.url().should("include","/dashboard/index") // Verify that dashboard page is displayed
        cy.get(DashboardPage.userProfileDropdown).should("be.visible")
        // cy.reload();
        cy.get(DashboardPage.userProfileDropdownIcon).click()
        cy.xpath(DashboardPage.userProfileMenu).contains("Logout").click();
        //cy.xpath(DashboardPage.logoutButton).click()
        cy.url().should("include","/auth/login") // Verify that login page is displayed again
    })

    /* TC_009	Verify "Forgot Password" link navigates to reset page
    1. Open the browser and navigate to OrangeHRM login page
    2. Click on the ""Forgot your password?"" link
    3. Verify that the password reset page is displayed"
    */

    it ("TC_009 - Verify Forgot Password link navigates to reset page", () => {
        cy.get(LoginPage.forgotPasswordLink).click()
        cy.url().should("include","/auth/requestPasswordResetCode") // Verify that password reset page is displayed
        cy.get(ResetPasswordPage.passwordTitle).should("be.visible").and('have.text',"Reset Password") // Verify that title of reset password page is "Reset Password"

    })
});