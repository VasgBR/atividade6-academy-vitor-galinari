class ListarPage{

    telaPrincipal() {
        cy.visit("");
    }

    novo() {
        cy.contains("a", "Novo").click();
    }
}

export var listarPage = new ListarPage();