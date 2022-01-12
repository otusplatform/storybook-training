describe('storybook-training', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=heading;image;link;tag;'));
  it('should render the component', () => {
    cy.get('storybook-training-card').should('exist');
  });
});