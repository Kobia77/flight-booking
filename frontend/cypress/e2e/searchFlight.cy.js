describe("Search Flight", () => {
  it("search flight button functionality", () => {
    cy.visit("/");

    cy.get('input[placeholder="Origin"]').type("hey");
    cy.get('input[placeholder="Destination"]').type("bye");
    cy.get('input[type="date"]').type("2024-09-14");

    cy.contains("Search Flights").click();
    cy.get("[data-cy=flight-card]").each(($card) => {
      cy.wrap($card).within(() => {
        cy.contains("hey");
        cy.contains("bye");
        cy.contains("9/14/2024");
      });
    });
  });
});
