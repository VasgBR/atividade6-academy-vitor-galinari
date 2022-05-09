class ListarPage{

    telaPrincipal() {
        cy.visit("");
    }

    novo() {
        cy.contains("a", "Novo").click();
    }

    verDetalhes() {
        cy.contains("a", "Ver detalhes").click();
    }
}

export var listarPage = new ListarPage();