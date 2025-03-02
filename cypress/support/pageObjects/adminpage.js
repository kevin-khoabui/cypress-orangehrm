class AdminPage {
    /* User Management Tab */
    userManagementMenu = "//span[normalize-space()='User Management']"
    usersMenu = "//ul[@class='oxd-dropdown-menu']"
    addButton = "//button[normalize-space()='Add']"
    usernameSearchTextField = ":nth-child(1)>.oxd-input-group>:nth-child(2)>.oxd-input"
    searchButton = "//button[normalize-space()='Search']"
    userTable = ".oxd-table"
    userTableCell = ".oxd-table-cell"


    /* Add User Page */
    userRolesDropDown = ".oxd-select-wrapper"
    userRolesDropDownList = ".oxd-select-dropdown"
    employeeNameInput =".oxd-autocomplete-text-input > input"
    statusDropDown = ".oxd-select-wrapper"
    statusDropDownList = ".oxd-select-dropdown"
    usernameTxtField = "(//input[@class='oxd-input oxd-input--active'])[2]"
    //passwordTxtField = ":nth-child(1)>.oxd-input-group>:nth-child(2)>.oxd-input"
    //confirmPasswordTxtField = "//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']"
    //confirmPasswordTxtField = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    passwordTxtField = "[type='password']" // First Text Field
    confirmPasswordTxtField = "[type='password']" // Second Text Field
    saveButton = ".oxd-button--secondary"

    

}

export default new AdminPage()