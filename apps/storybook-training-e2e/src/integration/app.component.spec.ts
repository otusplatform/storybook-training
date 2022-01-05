describe('storybook-training', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-training-root').should('exist');
  });
});