import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Body from "../../pageObjects/body";
const ExcelJs = require("exceljs");

//cypress/excelTest.js
//cypress/integration/pageObjects/body.js
const psBody = new Body();
//const excelData = new excelTest();

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
