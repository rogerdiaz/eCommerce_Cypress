import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../../pageObjects/header";

const psHeader = new header();

Given("I visit Product Store", () => {
  cy.visit(Cypress.env("url"));
});

When("I click on Logo", () => {
  psHeader.getLogo().click();
});

When("I click on Home", () => {
  psHeader.getHome().click();
});

When("I click on Contact", () => {
  psHeader.getContact().click();
});

When("I click on About us", () => {
  psHeader.getAboutUs().click();
});

When("I click on Cart", () => {
  psHeader.getCart().click();
});

When("I click on Log in", () => {
  psHeader.getLogin().click();
});

When(
  "I Log in with credentials username: {string} and password: {string}",
  (username, password) => {
    cy.wait(1000);
    psHeader
      .getTextField("loginusername")
      .type(username)
      .then(() => {
        psHeader
          .getTextField("loginpassword")
          .type(password)
          .then(() => {
            psHeader.getLoginButton().dblclick({ force: true });
          })
          .then(() => {
            cy.wait(1000);
          });
      });
  }
);

When("I click on Log Out", () => {
  psHeader.getLogOut().click();
});

Then("Homepage is shown", () => {
  psHeader.getCurrentUrl("https://www.demoblaze.com/index.html");
});

Then("Cart is shown", () => {
  psHeader.getCurrentUrl("www.demoblaze.com/cart.html#");
});

Then("Contact Modal is visible", () => {
  psHeader.getModal("exampleModalLabel").should("be.visible");
});

Then("About us Modal is visible", () => {
  psHeader.getModal("videoModalLabel").should("be.visible");
});

Then("Cart page is shown", () => {
  psHeader.getCurrentUrl("https://www.demoblaze.com/cart.html#");
});

Then("Log in Modal is visible", () => {
  psHeader.getModal("logInModalLabel").should("be.visible");
});

Then("Welcome button shows the username: {string}", (username) => {
  psHeader.getWelcomeUser(username).contains(username);
});

Then("Log out button disappeared", () => {
  psHeader.getLogOut().invoke("attr", "style").should("eq", "display:none");
});
