describe("Update Users", () => {
  let newUser = {
    name: "Oim Trust",
    job: "Engineer Manager",
  };

  cy.request("PUT", "https:reqres.in/api/users/2", newUser).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(newUser.name);
  });
});
