describe("Search Flight", () => {
  it("search flight button functionality", () => {
    cy.visit("/");

    cy.get('input[placeholder="Origin"]').type("Rome");
    cy.get('input[placeholder="Destination"]').type("Madrid");
    cy.get('input[type="date"]').type("2024-09-10");

    cy.contains("Search Flights").click();
    cy.get("[data-cy=flight-card]").each(($card) => {
      cy.wrap($card).within(() => {
        cy.contains("Rome");
        cy.contains("Madrid");
        cy.contains("9/10/2024");
      });
    });
  });
});
