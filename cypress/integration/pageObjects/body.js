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
    return cy
      .get("tbody[id='tbodyid']")
      .contains("td", item, { matchCase: false });
  }

  getDeleteBttn() {
    return cy.get('tr[class="success"] td a');
  }

  getPlaceOrder() {
    return cy.get('div[class="row"] div[class="col-lg-1"] button');
  }

  getFormField(field) {
    return cy.get('form div[class="form-group"] input[id="' + field + '"]');
  }

  getPurchaseBttn() {
    return cy.get(
      'div[class="modal-content"] div[class="modal-footer"] button[onclick="purchaseOrder()"]'
    );
  }

  getPurchaseTotal() {
    return cy.get('form label[id="totalm"]').then(($div) => {
      return String($div.text());
    });
  }

  getPurchasePopUpInfo(info) {
    return cy
      .get(
        'div[class="sweet-alert  showSweetAlert visible"] p[class="lead text-muted "]'
      )
      .contains(info);
  }
}
export default Body;
