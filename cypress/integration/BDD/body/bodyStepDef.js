import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import body from "../../pageObjects/body";

const psBody = new body();

Given("I go to Product Store", () => {
  cy.visit(Cypress.env("url"));
});

When("I click on Phone", () => {
  psBody.getDevicesCategory("phone").click();
});

When("I click on Laptops", () => {
  psBody.getDevicesCategory("notebook").click();
});

When("I click on Monitors", () => {
  psBody.getDevicesCategory("monitor").click();
});

Then("", () => {
  cy.get('div[id="tbodyid"] div div div h4').each(($el, index, $llist) => {
    cy.log((product = $el.text()));
  });
});
