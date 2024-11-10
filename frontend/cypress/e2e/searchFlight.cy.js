describe("Search Flight", () => {
  it("search flight button functionality", () => {
    cy.visit("/");

    cy.get('input[placeholder="Origin"]').type("Paris");
    cy.get('input[placeholder="Destination"]').type("Tokyo");
    cy.get('input[type="date"]').type("2024-11-20");

    cy.contains("Search Flights").click();
    cy.get("[data-cy=flight-card]").each(($card) => {
      cy.wrap($card).within(() => {
        cy.contains("Paris");
        cy.contains("Tokyo");
        cy.contains("11/20/2024");
      });
    });
  });
});
