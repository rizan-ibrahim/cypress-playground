/// <reference types="cypress" />

describe("Navigation", () => {
  it("Can go to the details page and back", () => {
    // First visit the page we want to test
    cy.visit("https://hyf-react-w2-example.netlify.app/");

    // Check that there are 20 products
    cy.get('[data-testid="product-link"]').should("have.length", 20);

    // Click the first product
    cy.get('[data-testid="product-link"]').first().click();

    // Check that we are on the product details page
    cy.get('[data-testid="product-details-page"]').should("be.visible");

    // Go back to the previous page
    cy.go("back");

    // Check that we are on the products page again
    cy.get('[data-testid="products-page"]').should("be.visible");
  });
});
