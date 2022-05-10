import { listarPage } from "../pages/listarPage.po"
import { criarPage } from "../pages/criarPage.po"

Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
})

Given("acesso a página de cadastrar através da opção Novo", () => {
    listarPage.novo();
})

When("informo um nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.atribuirNome(dadosTabela.nome);
})

When("informo um email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.atribuirEmail(dadosTabela.email);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: [{
            "id": "0910f812-5fc2-4df6-b124-157af3b9e146",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-09T23:54:53.901Z",
            "updatedAt": "2022-05-09T23:54:53.901Z"
        }]
    });
})

When("informo um nome inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.atribuirNome(dadosTabela.nome);
})

When("informo um email inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.atribuirEmail(dadosTabela.email);
})

When("informo um email já existente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.atribuirEmail(dadosTabela.email);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 422,
        body: [{
            "id": "0910f812-5fc2-4df6-b124-157af3b9e664",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-09T23:54:53.901Z",
            "updatedAt": "2022-05-09T23:54:53.901Z"
        }]
    });
})

When("tenho um usuário cadastrado", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: [{
            "id": "0910f812-5fc2-4df6-b124-157af3b9e146",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-09T23:54:53.901Z",
            "updatedAt": "2022-05-09T23:54:53.901Z"
        }]
    });
})

When("confirmo o formulário através do botão Salvar", () => {
    criarPage.salvar();
})

When("clico na opção voltar", () => {
    criarPage.voltar();
})

When("clico no ícone principal", () => {
    criarPage.icone();
})

Then("visualizo a mensagem de sucesso", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.mensagemDeSucesso(dadosTabela.mensagem);
})

Then("visualizo a mensagem de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.mensagemDeErro(dadosTabela.mensagem);
})

Then("visualizo as mensagens de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.mensagemDeErro(dadosTabela.mensagem1);
    criarPage.mensagemDeErro(dadosTabela.mensagem2);
})

Then("volto para a tela principal", () => {
    criarPage.telaPrincipal();
})