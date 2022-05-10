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

    proxima() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "lista.json"
    });
        cy.contains("button", "Próxima").click();
    }

    anterior() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "lista.json"
    });
        cy.contains("button", "Anterio").click();
    }

    paginaDois() {
        cy.contains("2 de").should("be.visible");
    }

    paginaUm() {
        cy.contains("1 de").should("be.visible");
    }

    lista() {
        cy.get("#listaUsuarios").should("be.visible");
    }

    confirmar() {
        cy.contains("button", "Confirmar").click();
    }

    listaVazia() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: []
        });
    }

    nenhumUsuario() {
        cy.contains("Ops! Não existe nenhum usuário para ser exibido.");
    }

    direcionadoParaCadastro() {
        cy.contains("Cadastre um novo usuário").click();
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/novo")
    }
}

export var listarPage = new ListarPage();