class RemoverPage{

    telaPrincipal() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users");
    }

    lixeira() {
        cy.get(".vggQs").eq(0).click();
    }

    confirmar() {
        cy.contains("button", "Confirmar").click();
    }

    cancelar() {
        cy.contains("button", "Cancelar").click();
    }

    x() {
        cy.contains("button","x").click();
    }

    tela() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [{
            "id": "e799a2a6-4661-4ef7-94bc-3ad4c419c4ce",
            "name": "Vitor Galinari",
            "email": "vitor@galinari.com",
            "createdAt": "2022-05-10T17:22:05.037Z",
            "updatedAt": "2022-05-10T17:22:05.037Z"
        }]
    });
    }
}

export var removerPage = new RemoverPage();