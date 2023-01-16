describe('My Cards Test', () => {
  beforeEach(() => {
    cy.intercept("https://api-nba-v1.p.rapidapi.com/players?team=1&season=2022", {
      method: "GET",
      fixture: "../fixtures/roster.json"
    })
    cy.visit("http://localhost:3000/roster/1")
    cy.get(".save-btn").eq(0).click()
    cy.get(".save-btn").eq(0).click()
    cy.get(".my-cards-btn").click()
  })
  it("Should display the my cards section with two player cards", () => {
    cy.contains("h1", "My Cards")
    cy.get(".player-card").should("have.length", "2")
  })
  it("Should display the appropriate information on the cards", () => {
    cy.get(".player-card").eq(0).within(() => {
      cy.get(".team-logo").should("be.visible")
      cy.get(":nth-child(2)").contains("John Collins")
      cy.get(":nth-child(3)").contains("Number: 20")
      cy.get(":nth-child(4)").contains("Position: F-C")
      cy.get(":nth-child(5)").contains("Height")
      cy.get(":nth-child(6)").contains("Weight: 226")
      cy.get(".save-btn").contains("Delete Player Card")
    })
    cy.get(".player-card").eq(1).within(() => {
      cy.get(".team-logo").should("be.visible")
      cy.get(":nth-child(2)").contains("Trae Young")
      cy.get(":nth-child(3)").contains("Number: 11")
      cy.get(":nth-child(4)").contains("Position: G")
      cy.get(":nth-child(5)").contains("Height")
      cy.get(":nth-child(6)").contains("Weight: 164")
      cy.get(".save-btn").contains("Delete Player Card")
    })
  })
  it("Should remove the cards is the delete button is clicked", () => {
    cy.get(".save-btn").eq(0).click()
    cy.get(".player-card").should("have.length", "1")
  })
})