describe("GET Users", () => {
  it("Verify the list users will displayed", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
    }).as("users");

    cy.get("@users").its("status").should("eq", 200);
    // or
    // cy.get("@users").then((response) => {
    //   expect(response.status).to.eq(200);
    //   cy.log(JSON.stringify(response.body));
    // });
  });
});
