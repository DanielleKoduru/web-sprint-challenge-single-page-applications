//Cypress-Testing Project
describe('Cypress Sprint Tests', () => {
    it('can navigate to site', () => {
        cy.visit('http://localhost:3000/Pizza')
        cy.url().should('include', 'localhost');
    });

    it('should do some basic math', () => {
        expect(1 + 1).to.equal(2);
        expect(1 + 2).not.to.equal(4);
        expect({}).not.to.equal({}); //===
        expect({}).to.eql({}); //==
    });

    it('can add text to name input', () => {
        cy.get('input')
            .first()
            .click()
            .type('danielle')
    });

    it("can select pizza size", () => {
        cy.get("select").select('Large')
    });

    it('can select multiple toppings', () => {
        cy.get('[type="checkbox"]').check()
    });

    it('should submit', () => {
        cy.get("button").click();
    });
});

