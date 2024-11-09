// cypress/e2e/flightBooking.spec.js
describe("Flight Booking System", () => {
  it("searches and books a flight", () => {
    // Visit the homepage
    cy.visit("/");

    // Enter search details
    cy.get('input[placeholder="Origin"]').type("hey");
    cy.get('input[placeholder="Destination"]').type("bye");
    cy.get('input[type="date"]').type("2024-09-14");

    // Click the search button
    cy.contains("Search Flights").click();

    // Assert that flights appear
    cy.contains("kobi").should("exist");

    // Book the first flight
    cy.contains("Book Now").first().click();

    // Assert booking success (check for a pop-up or button state change)
    cy.contains("Booked").should("exist");

    cy.contains("Booked Flights").click();
    cy.contains("kobi").should("exist");
    cy.contains("Cancel").first().click();
    cy.contains("kobi").should("not.exist");
    cy.contains("Booked Flights").click();
  });
});
