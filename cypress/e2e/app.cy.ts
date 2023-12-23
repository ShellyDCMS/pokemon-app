// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it.skip("renders the app", function () {
    cy.get(".App-link").should("contain", "Learn React");
  });

  it("should render pokemon image", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      );
  });
});
