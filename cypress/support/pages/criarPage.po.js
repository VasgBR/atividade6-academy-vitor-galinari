class CriarPage{
    inputNome = "#name"
    inputEmail = "#email"

    atribuirNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    atribuirEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    icone() {
        cy.get(".jbJCFN").click();
    }

    salvar() {
        cy.contains("button", "Salvar").click();
    }

    voltar() {
        cy.contains("a", "Voltar").click();
    }

    mensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    mensagemDeErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    preencherFormularioESalvar(nome, email) {
        this.atribuirNome(nome);
        this.atribuirEmail(email);
        this.salvar();
        cy.wait(2000);
    }

    telaPrincipal() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users");
    }
}

export var criarPage = new CriarPage();