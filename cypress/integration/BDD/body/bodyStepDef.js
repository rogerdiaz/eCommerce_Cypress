import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Body from "../../pageObjects/body";
import header from "../../pageObjects/header";
const ExcelJs = require("exceljs");

const psBody = new Body();
const psHeader = new header();

Given("I go to Product Store", () => {
  cy.visit(Cypress.env("url")).wait(2500);
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

When("I click on Next", () => {
  cy.wait(2000).then(() => {
    psBody.getNext().click({ force: true });
  });
});

When("I click on Previous", () => {
  cy.wait(2000).then(() => {
    psBody.getPrevious().click();
  });
});

When("I click on product named {string}", (product) => {
  psBody.getDevice().contains(product).click({ force: true });
});

When("I add the product to the Cart", () => {
  psBody.getAddToCart().click({ force: true });
});

When("I delete the product I added", () => {
  //This has to be placed in another function when possible
  psHeader.getCart().click();
  //////////////////////////////
  psBody.getDeleteBttn().click({ force: true });
});

Then("I check all the elements of {string} list", (devices) => {
  cy.wait(5000).then(() => {
    const excelData = new excelTest();
    const psBody = new Body();
    const arr = 9;

    psBody.getDevice().each(($el) => {
      const product = $el.text();
      cy.log("Product from the web: " + product);

      for (let i = 2; i < arr; i++) {
        excelData.getExcelValue(i, devices, "Sheet1").then((excelItem) => {
          if (excelItem === product) {
            cy.log("Product is part of the " + devices + " list");
            cy.log("Internet list is " + product);
            cy.log("Excel list is " + excelItem);
          } else {
            cy.log("");
          }
        });
      }
    });
  });
});

Then("I see the First page", () => {
  cy.wait(5000).then(() => {
    const excelData = new excelTest();
    const arr = 12;
    const devices = "Firstpage";

    psBody.getDevice().each(($el) => {
      const product = $el.text();
      cy.log("Product from the web: " + product);

      for (let i = 2; i < arr; i++) {
        excelData.getExcelValue(i, devices, "Sheet2").then((excelItem) => {
          if (excelItem === product) {
            cy.log("Product is part of the " + devices + " list");
            cy.log("Internet list is " + product);
            cy.log("Excel list is " + excelItem);
          } else {
            cy.log("");
          }
        });
      }
    });
  });
});

Then("I see the Second page", () => {
  cy.wait(5000).then(() => {
    const excelData = new excelTest();
    const arr = 12;
    const devices = "Secondpage";

    psBody.getDevice().each(($el) => {
      const product = $el.text();
      cy.log("Product from the web: " + product);

      for (let i = 2; i < arr; i++) {
        excelData.getExcelValue(i, devices, "Sheet2").then((excelItem) => {
          if (excelItem === product) {
            cy.log("Product is part of the " + devices + " list");
            cy.log("Internet list is " + product);
            cy.log("Excel list is " + excelItem);
          } else {
            cy.log("");
            // cy.log("Internet list is " + product);
            // cy.log("Excel list is " + excelItem);
          }
        });
      }
    });
  });
});

Then("The product {string} was added to the cart", (item) => {
  psHeader.getCart().click();
  psBody.getListItem(item).should("be.visible");
});

Then("The {string} is not found in the Items list", (item) => {
  psBody.getListItem(item).should("not.be.visible");
});

class excelTest {
  getExcelValue(row, device, sheet) {
    const ExcelJs = require("exceljs");
    const pathToFile =
      "/Users/rogerartemiodiazfuentes/Documents/Cypress_projects/eCommerce_Product_Store_Cypress/cypress/fixtures/Book1.xlsx";
    var deviceType = 0;
    if (device == "Phones") {
      deviceType = 1;
    } else if (device == "Laptops") {
      deviceType = 4;
    } else if (device == "Monitors") {
      deviceType = 7;
    } else if (device == "Firstpage") {
      deviceType = 1;
    } else if (device == "Secondpage") {
      deviceType = 3;
    }
    // Use Cypress's chaining mechanism
    return cy.readFile(pathToFile, null).then((fileBuffer) => {
      const workbook = new ExcelJs.Workbook();
      return workbook.xlsx.load(fileBuffer).then(() => {
        const worksheet = workbook.getWorksheet(sheet);
        const cell = worksheet.getCell(row, deviceType);
        return cell.value ? String(cell.value) : "there is no value";
      });
    });
  }
}
