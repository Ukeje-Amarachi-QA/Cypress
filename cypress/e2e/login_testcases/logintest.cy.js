describe('LoginTest', ()=> {

    it('Login Test Functionality', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('img[alt="client brand banner"]')
        .should('be.visible')
        .log();('User login to the application successful')

    });

    describe('Login Functionality', () => {
        beforeEach(() => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        });
      
        it('Successful login with valid credentials', () => {
          cy.get("[name='username']").type('Admin');
          cy.get("[name='password']").type('admin123');
          cy.get("button[type='submit']").click();
          
          
        });
      
        it('Invalid Credentials', () => {
          cy.get("[name='username']").type('Amarachi');
          cy.get("[name='password']").type('amara123');
          cy.get("button[type='submit']").click();
          cy.get('.oxd-alert.oxd-alert--error').should('be.visible');
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
          

    
        
        });
      
       
      });
      
});
