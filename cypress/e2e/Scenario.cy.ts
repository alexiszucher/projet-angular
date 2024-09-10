describe("Test sur la page de liste des podcasts", () => {
  describe("Ajouter un podcast", () => {
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
});


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

  it("Je peux retourner à la liste des podcasts", () => {
    cy.get('[data-test="bouton-retourner-liste-podcasts"]').should('be.visible');
    cy.get('[data-test="bouton-retourner-liste-podcasts"]').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });

  describe("Ajouter un épisode", () => {
    it("Un épisode peut être créé et affiché sur le podcast", () => {
      cy.get('[data-test="input-nom-episode-a-ajouter"]').type("Episode 1");
      cy.get('[data-test="list-item-episode"]').should('have.length', 0);
      cy.get('[data-test="bouton-ajouter-episode"]').click();
      cy.get('[data-test="list-item-episode"]').should('have.length', 1);
      cy.get('[data-test="list-item-episode"]').contains("Episode 1");
    });
  });

  describe("Visibilité d'un épisode dans la liste des épisodes", () => {
    beforeEach(() => {
      cy.get('[data-test="input-nom-episode-a-ajouter"]').type("Episode 1");
      cy.get('[data-test="bouton-ajouter-episode"]').click();
    });
    it("Un épisode doit avoir un oeil a côté du nom", () => {
      cy.get('[data-test="list-item-episode"]').should('have.length', 1);
      cy.get('[data-test="list-item-episode"]').find('eye-icon').should('be.visible');
    });
    it("Un bloc note doit être présent à côté du nom", () => {
      cy.get('[data-test="list-item-episode"]').should('have.length', 1);
      cy.get('[data-test="list-item-episode"]').find('note-icon').should('be.visible');
    });
  });

});
