describe("Test sur la page de détail de posdcast", () => {
  it("Le titre du podcast sur lequel on a cliqué doit apparaître", () => {
    cy.visit("http://localhost:4200/detail-podcast/Morning-Routine");
    cy.get('[data-test="detail-podcast-titre"]').should("be.visible");
    cy.get('[data-test="detail-podcast-titre"]').contains("Morning-Routine");
  });
  it("Les épîsodes du podcast doivent être affichés", () => {
    cy.visit("http://localhost:4200/detail-podcast/Morning-Routine");
  });
});
