//Cypress-Testing Project
describe('Cypress Sprint Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get(['values']);
    const toppingsInput = () => cy.get('[type="checkbox"]').check();
    const submitBtn = () => cy.get(`button[id="submitBtn"]`);
    const instructionsInput = () => cy.get('input[name=instructions]');

    it('should do some basic math', () => {
        expect(1 + 1).to.equal(2);
        expect(1 + 2).not.to.equal(4);
        expect({}).not.to.equal({}); //===
        expect({}).to.eql({}); //==
    });


    it('should display expected elements', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        toppingsInput().should('exist');
        instructionsInput().should('exist');
    });

    describe('Filling out inputs and canceling', () => {
        it('can get to correct url', () => {
            cy.url().should('include', 'localhost');
        });

        it('submit button should be disabled on initial load', () => {
            submitBtn().should('be.disabled');
        });

        it('adding text to input', () => {
            nameInput()
                .should('have.value', '')
                .type('How are you?')
                .should('have.value', 'How are you?')

            sizeInput()
                .should('have.value', '')
                .type('medium')
                .should('have.value', 'teams@teams.com')

            instructionsInput()
                .should('have.value', '')
                .type('What are my instructions?')
                .should('have.value', 'What are my instructions?')
        });

        it('should enable submit button when all fields are filled in', () => {
            nameInput().type('Danielle')
            sizeInput().type('medium')
            instructionsInput().type('Dairy allergy')
            submitBtn().type('not.be.disabled')
        });
    });


});