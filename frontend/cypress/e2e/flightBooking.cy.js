describe("Flight Booking", () => {
  it("searches and books a flight", () => {
    cy.visit("/");

    cy.get('input[placeholder="Origin"]').type("Paris");
    cy.get('input[placeholder="Destination"]').type("Tokyo");
    cy.get('input[type="date"]').type("2024-11-20");

    cy.contains("Search Flights").click();
    cy.contains("kobi").should("exist");
    cy.contains("Book Now").first().click();
    cy.contains("Booked").should("exist");
  });
});
