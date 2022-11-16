describe("DELETE Users", () => {
  it("Delete Users", () => {
    cy.request("DELETE", "https:reqres.in/api/users/2").then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
