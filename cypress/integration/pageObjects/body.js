class Body {
  getDevicesCategory(device) {
    return cy.get(
      'div[class="list-group"] a[onclick="byCat(\'' + device + "')\"]"
    );
  }

  getDevice() {
    return cy.get('div[id="tbodyid"] div div div h4 a');
  }

  getNext() {
    return cy.get('ul[class="pagination"] li button[id="next2"]');
  }

  getPrevious() {
    return cy.get('ul[class="pagination"] li button[id="prev2"]');
  }

  getAddToCart() {
    return cy.get('div[class="row"] div a[onclick="addToCart(1)"]');
  }

  getListItem(item) {
    return cy.get('tbody[id="tbodyid"] tr[class="success"] td').contains(item);
  }

  getDeleteBttn() {
    return cy.get('tr[class="success"] td a');
  }
}
export default Body;
