describe("Flight Cancellation", () => {
  it("cancels a booked flight and verifies it is removed from the list", () => {
    // Step 1: Visit the booked flights page
    cy.visit("/booked-flights");

    cy.get("body").then(($body) => {
      if ($body.find("[data-cy=no-flights-message]").length > 0) {
        cy.contains("No flights found. Please search.").should("be.visible");
      } else {
        cy.get("[data-cy=flight-card]").then(($cards) => {
          if ($cards.length > 1) {
            cy.get("[data-cy=flight-card]")
              .first()
              .within(() => {
                cy.get("[data-cy=flight-airline]")
                  .invoke("text")
                  .then((airlineName) => {
                    cy.contains("Cancel").click();
                    cy.get("[data-cy=flight-card]").should(
                      "have.length.lessThan",
                      $cards.length
                    );
                    cy.get("[data-cy=flight-card]").each(($card) => {
                      cy.wrap($card).within(() => {
                        cy.get("[data-cy=flight-airline]").should(
                          "not.have.text",
                          airlineName
                        );
                      });
                    });
                  });
              });
          } else {
            cy.contains("Cancel").click();
            cy.contains("No flights found. Please search.").should(
              "be.visible"
            );
          }
        });
      }
    });
  });
});
