import 'cypress-xpath'
import LeftMenu from '../support/pageObjects/leftmenu'
import AdminPage from '../support/pageObjects/adminpage'
import '../support/commands'

describe ('User Management Test Suite',()=>{

    beforeEach (() => {
        cy.visit('/')
        cy.loginFunction(Cypress.env("validUsername"),Cypress.env("validPassword"))
    })


    /* UM_001 - Verify that an Admin can add a new user successfully	
    "Precondition: Admin is logged in and has access to User Management. 
    Steps:
    1. Navigate to Admin → User Management → Users. 
    2. Click the ""Add"" button. 
    3. Select User Role (Admin/ESS). 
    4. Enter Employee Name. 
    5. Enter a unique username. 
    6. Select Status (Enabled/Disabled). 
    7. Enter and confirm a strong password. 
    8. Click the Save button.
    */

    it("UM_001 - Verify that an Admin can add a new user successfully",()=>{
        cy.xpath(LeftMenu.adminMenu).click()
        cy.xpath(AdminPage.userManagementMenu).click()
        cy.xpath(AdminPage.usersMenu).click()
        cy.url().should("include","/admin/viewSystemUsers")

        cy.xpath(AdminPage.addButton).click()
        cy.get(AdminPage.userRolesDropDown).eq(0).click()
        cy.get(AdminPage.userRolesDropDownList).contains("Admin").click()

        cy.get(AdminPage.employeeNameInput).type("Ranga Akunuri")
        cy.wait(1000)
        cy.contains("Ranga Akunuri").click();

        cy.get(AdminPage.statusDropDown).eq(1).click()
        cy.contains("Enabled").click()

        const uniqueUsername = "Ranga" + Date.now()
        cy.xpath(AdminPage.usernameTxtField).type(uniqueUsername)

        cy.get(AdminPage.passwordTxtField).first().type("Password@123")
        cy.get(AdminPage.confirmPasswordTxtField).last().type("Password@123")

        cy.get(AdminPage.saveButton).click()
       
        cy.get(AdminPage.usernameSearchTextField).type(uniqueUsername)
        cy.xpath(AdminPage.searchButton).click()
        cy.get(AdminPage.userTable).contains(AdminPage.userTableCell,uniqueUsername).should("be.visible")

    })






})