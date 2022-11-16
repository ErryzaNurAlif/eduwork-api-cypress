describe("POST Users", () => {
  it("Add a new user", () => {
    let user = {
      name: "Erryza Nur Alif ",
      job: "Quality Assurance Engineer",
    };

    cy.request("POST", "https:reqres.in/api/users", user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(user.name);
      expect(response.body.job).to.eq(user.job);
    });
  });
});
