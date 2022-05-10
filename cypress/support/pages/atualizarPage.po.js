class AtualizarPage{
    inputNome = "#userName"
    inputEmail = "#userEmail"

    editar() {
        cy.contains("button", "Editar").click();
    }

    vizualizarEditar() {
        cy.contains("button", "Editar").should("be.visible");
    }

    cancelar() {
        cy.contains("button", "Cancelar").click();
    }

    apagarNome() {
        cy.get(this.inputNome).clear();
    }

    apagarEmail() {
        cy.get(this.inputEmail).clear();
    }

    atualizarNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    atualizarEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    atualizarEmailDeOutroUsuario(emailDeOutroUsuario) {
        cy.get(this.inputEmail).type(emailDeOutroUsuario)
    }

    usuariosCadastrados() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "lista.json"
    });
    }

}

export var atualizarPage = new AtualizarPage();