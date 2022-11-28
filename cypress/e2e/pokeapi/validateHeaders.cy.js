describe("Automation API with Pokemon API", () => {
  it("Successfully validate content-type", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");

    // OR

    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/ditto",
      headers: {
        accept: "application/json; charset=utf-8",
      },
    }).as("pokemon");

    cy.get("@pokemon").then((response) => {
      expect(response.headers).to.have.property(
        "content-type",
        "application/json; charset=utf-8"
      );
    });
  });

  it("Successfully assertion respon body", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon").then((response) => {
      expect(response.body).to.have.property("name");
      cy.log(JSON.stringify(response.body));
    });
  });

  it("Successfully validate status code", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon").its("status").should("eq", 200);

    //OR

    cy.get("@pokemon").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.only("Successfully validate content", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/ditto",
    }).then((response) => {
      cy.log(JSON.stringify(response.body.abilities[0].ability["name"]));
      expect(response.body.abilities[0].ability["name"]).to.eq("limber");
    });
  });

  it("Validate Negative Response", () => {
    cy.request({
      methos: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/eduwork",
      failOnStatusCode: false,
    }).as("pokemon");

    cy.get("@pokemon").its("status").should("eq", 404);
  });
});
