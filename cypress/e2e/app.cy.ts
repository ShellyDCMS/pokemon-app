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

  it("should render next button", () => {
    cy.get("button").should("contain", "Next");
  });

  it("should render previous button", () => {
    cy.get("button").should("contain", "Prev");
  });

  it("should render next pokemon when next button is clicked", () => {
    cy.get("button").contains("Next").click();
    cy.get("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      );
  });

  it("should render prev pokemon when prev button is clicked", () => {
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Prev").click();
    cy.get("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      );
  });

  it("should render pokemon name", () => {
    cy.get("h1").should("contain", "bulbasaur");
  });

  it("prev button should be disabled when first pokemon is rendered", () => {
    cy.get("button").contains("Prev").should("be.disabled");
  });
});
