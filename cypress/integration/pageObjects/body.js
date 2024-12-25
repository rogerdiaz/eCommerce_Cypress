class body {
  getPhones() {
    return cy.get('div[class="list-group"] a[onclick="byCat(\'phone\')"]');
  }
}

export default body;
