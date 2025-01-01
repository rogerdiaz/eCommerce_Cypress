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
}
export default Body;
