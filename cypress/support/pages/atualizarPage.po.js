class AtualizarPage{
    inputNome = "#userName"
    inputEmail = "#userEmail"

    editar() {
        cy.contains("button", "Editar").click();
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

}

export var atualizarPage = new AtualizarPage();