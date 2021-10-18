export default class VScrumRegister {
    get freeSingUpBtn() {
        return cy.get(`a[onclick="goToSignUpCard('starter', 'yearly')"]`)
    }
    get emailInput() {
        return cy.get('input[type="email"]')
    }
    get passwordInput() {
        return cy.get('input[type="password"]')
    }
    get numberOfUsersInput() {
        return cy.get('input[name="number_of_users"]')
    }
    get checkBox() {
        return cy.get('input[type="checkbox"]')
    }
    get submitBtn() {
        return cy.get('button[type="submit"]')
    }
    get header1() {
        return cy.get('h1')
    }
    get errorMessage() {
        return cy.get('.el-form-item__error')
    }
    register(email, password, numberOfUsers) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.numberOfUsersInput.type(numberOfUsers)
        this.checkBox.check({force: true})
    }
}
export const vScrum = new VScrumRegister();