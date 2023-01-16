describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept("https://api-nba-v1.p.rapidapi.com/teams", {
      method: "GET",
      fixture: "../fixtures/teams.json"
    })
    cy.visit("http://localhost:3000/")
  })
  it("Should visit the homepage", () => {
    cy.contains("h1", "Hooper Hobby")
  })
  it("Should have two images that display browse teams and saved cards", () => {
    cy.get(".left-side").should("contain", "Browse Teams")
    cy.get(".right-side").should("contain", "Saved Cards")
  })
  it("Should take you to a the teams page when you click on the browse teams image", () => {
    cy.get(".teams-link").click()
    cy.url("http://localhost:3000/teams")
  })
  it("Should take you to the saved cards page when you click on the saved cards image", () => {
    cy.get(".saved-link").click()
    cy.url("http://localhost:3000/my-cards")
    cy.contains("No cards to display, go save some basketball cards!")
  })
  it("Should not display the teams button in the header if you are on the Teams page", () => {
    cy.get(".teams-link").click()
    cy.get(".view-teams-btn").should("not.exist")
  })
  it("Should not display the My Cards button in the header if you are on the My Cards page", () => {
    cy.get(".saved-link").click()
    cy.get(".my-cards-btn").should("not.exist")
    cy.get(".view-teams-btn").click()
    cy.get(".my-cards-btn").click()
    cy.get(".title").click()
  })
})