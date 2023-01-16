describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("Should visit the homepage", () => {
    cy.contains("h1", "Hooper Hobby")
  })
  it("Should have two images that display browse teams and saved cards", () => {
    cy.get(".left-side").should("contain", "Browse Teams")
    cy.get(".right-side").should("contain", "Saved Cards")
  })
})