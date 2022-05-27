// app1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("React TodoMVC", () => {
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'

    beforeEach(() => {
      cy.visit("http://localhost:8888")
    })
    it.only("adds three todos", () => {
        cy.createDefaultTodos().as("todos")
        cy.get("@todos").should("have.length", 3)
      })
it("should append new items to the bottom of the list", () => {
    cy.createDefaultTodos()
    // Todo 1
    cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)

    // Todo 2
    cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
  
    // Todo 3
    cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
  })
})
it("does NOT display the footer or todo-list when there are no todos", () => {
    cy.get(".footer").should("not.exist")
    cy.get(".todo-list").should("not.exist")
  })