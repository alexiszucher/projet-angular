describe("Test sur ajouter un podcast", () => {
  it("Les champs liés à l'ajout d'un podcast doivent être visibles à l'écran", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-test="ajouter-podcast-titre"]').should("be.visible");
    cy.get('[data-test="input-nom-podcast-a-ajouter"]').should("be.visible");
    cy.get('[data-test="bouton-ajouter-podcast"]').should("be.visible");
  });
  it("Le podcast doit être ajouté dans la liste", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-test="input-nom-podcast-a-ajouter"]').type("Test de podcast");
    cy.get('[data-test="list-item-podcast"]').should('have.length', 0);
    cy.get('[data-test="bouton-ajouter-podcast"]').click();
    cy.get('[data-test="list-item-podcast"]').should('have.length', 1);
  });
});
