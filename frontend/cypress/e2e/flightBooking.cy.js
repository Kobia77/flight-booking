describe("Flight Booking", () => {
  it("searches and books a flight", () => {
    cy.visit("/");

    cy.get('input[placeholder="Origin"]').type("Berlin");
    cy.get('input[placeholder="Destination"]').type("Moscow");
    cy.get('input[type="date"]').type("2024-08-17");

    cy.contains("Search Flights").click();
    cy.contains("FlyHigh").should("exist");
    cy.contains("Book Now").first().click();
    cy.contains("Booked").should("exist");
  });
});
