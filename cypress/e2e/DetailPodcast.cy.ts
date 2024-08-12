describe("Test sur la page de détail de posdcast", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
    cy.get('[data-test="input-nom-podcast-a-ajouter"]').type("Morning-Routine");
    cy.get('[data-test="bouton-ajouter-podcast"]').click();
    cy.get('[data-test="list-item-podcast"]').click();
  });

  it("Le titre du podcast sur lequel on a cliqué doit apparaître", () => {
    cy.get('[data-test="detail-podcast-titre"]').should("be.visible");
    cy.get('[data-test="detail-podcast-titre"]').contains("Morning-Routine");
  });

  it("Un épisode peut être créé et affiché sur le podcast", () => {
    cy.get('[data-test="input-nom-episode-a-ajouter"]').type("Episode 1");
    cy.get('[data-test="list-item-episode"]').should('have.length', 0);
    cy.get('[data-test="bouton-ajouter-episode"]').click();
    cy.get('[data-test="list-item-episode"]').should('have.length', 1);
    cy.get('[data-test="list-item-episode"]').contains("Episode 1");
  });

  it("Je peux retourner à la liste des podcasts", () => {
    cy.get('[data-test="bouton-retourner-liste-podcasts"]').should('be.visible');
    cy.get('[data-test="bouton-retourner-liste-podcasts"]').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });
});
