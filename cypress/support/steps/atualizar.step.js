import { listarPage } from "../pages/listarPage.po"
import { atualizarPage } from "../pages/atualizarPage.po"

Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
})

Given("clico na opção Ver detalhes de qualquer usuário que eu queira atualizar", () => {
    listarPage.verDetalhes();
})

Given("tenho usuários cadastrados", () => {
    atualizarPage.usuariosCadastrados();
})

When("clico em Editar", () => {
    atualizarPage.editar();
})

When("apago o que está escrito no campo nome", () => {
    atualizarPage.apagarNome();
})

When("apago o que está escrito no campo email", () => {
    atualizarPage.apagarEmail();
})

When("altero o nome para um nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarNome(dadosTabela.nome);
})

When("altero o email para um email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmail(dadosTabela.email);
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/**", {
        statusCode: 200,
        body: [{
            "id": "0910f812-5fc2-4df6-b124-157af3b9e664",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-09T23:54:53.901Z",
            "updatedAt": "2022-05-09T23:54:53.901Z"
        }]
    });
})

When("altero o email para o email de outro usuário", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmailDeOutroUsuario(dadosTabela.emailDeOutroUsuario);
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/**", {
        statusCode: 422,
    });
})

When("clico em Cancelar", () => {
    atualizarPage.cancelar();
})

Then("vizualizo o botão de Editar novamente", () => {
    atualizarPage.vizualizarEditar();
})