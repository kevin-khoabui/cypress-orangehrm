class LoginPage {
    usernameInput = "input[name='username']"
    passwordInput = "input[name='password']"
    loginButton = "button[type='submit']"
    invalidCredentialsMessage = ".oxd-text.oxd-text--p.oxd-alert-content-text"
    usernameRequiredMessage = "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[1]"
    //passwordRequiredMessage = "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[2]"
    usernameRequiredMessage = "//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]"
    passwordRequiredMessage = "//div[@class='orangehrm-login-form']//div[2]//div[1]//span[1]"
    forgotPasswordLink = ".oxd-text.oxd-text--p.orangehrm-login-forgot-header"
}

export default new LoginPage();