class Body {
  getDevicesCategory(device) {
    return cy.get(
      'div[class="list-group"] a[onclick="byCat(\'' + device + "')\"]"
    );
  }

  getDevice() {
    return cy.get('div[id="tbodyid"] div div div h4 a');
  }
}
export default Body;
