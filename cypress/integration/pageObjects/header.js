class header {
  getLogo() {
    return cy.get('nav a[id="nava"]');
  }

  getHeaderButton(buttonName) {
    return cy.get('li a[class="nav-link"]').contains(buttonName);
  }

  getHome() {
    return this.getHeaderButton("Home ");
  }

  getContact() {
    return this.getHeaderButton("Contact");
  }

  getAboutUs() {
    return this.getHeaderButton("About us");
  }

  getCart() {
    return this.getHeaderButton("Cart");
  }

  getLogin() {
    return this.getHeaderButton("Log in");
  }

  getTextField(id) {
    return cy.get('input[id="' + id + '"]');
  }

  getLoginButton() {
    return cy.get(
      'div[id="logInModal"] div div[class="modal-content"] div[class="modal-footer"] button[class="btn btn-primary"]:visible'
    );
  }

  getSignUp() {
    return this.getHeaderButton("Sign up");
  }

  getLogOut() {
    return this.getHeaderButton("Log out");
  }

  getWelcomeUser(username) {
    return this.getHeaderButton("Welcome " + username);
  }

  getCurrentUrl(val) {
    return cy.url().should(($lis) => {
      expect($lis).to.contain(val);
    });
  }

  getModal(modal) {
    return cy.get('div[class="modal-header"] h5[id="' + modal + '"]');
  }
}

export default header;
