describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept("https://api-nba-v1.p.rapidapi.com/teams", {
      method: "GET",
      fixture: "../fixtures/teams.json"
    })
    cy.visit("http://localhost:3000/teams")
  })
  it("Should display two team logos", () => {
    cy.get(".team-image").eq(0).should("be.visible")
    cy.get(".team-image").eq(0).should("be.visible")
  })
  it("Should have a option menu to filter the teams and display the appropriate teams", () => {
    cy.get(".filter-header").contains("Filter By Division")
    cy.get(".division-filter").select("East").should("have.value", "East")
    cy.get(".team-card").should("have.length", "2")
    cy.get(".division-filter").select("West").should("have.value", "West")
    cy.get(".team-card").should("have.length", "0")
  })
})