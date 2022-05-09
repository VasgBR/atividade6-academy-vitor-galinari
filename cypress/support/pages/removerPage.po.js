class RemoverPage{

    telaPrincipal() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/");
    }

    lixeira() {
        cy.get(".vggQs").eq(1).click();
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
}

export var removerPage = new RemoverPage();