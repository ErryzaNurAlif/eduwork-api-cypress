describe("Test Scenario API Authentication", () => {
  it("Successfully login by appending username and password in URL", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper crendential"
    );
  });

  it("Succesfully login using headers", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      headers: {
        authorization: "Basic YWRtaW46YWRtaW4=",
      },
      faiOnStatuscode: false,
    });

    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });
});
