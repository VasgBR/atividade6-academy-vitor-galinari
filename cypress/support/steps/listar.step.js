import { listarPage } from "../pages/listarPage.po"
import { criarPage } from "../pages/criarPage.po"

Given("não tenho nenhum usuário cadastrados", () => {
    listarPage.listaVazia();
})

When("clico no botão Próxima", () => {
    listarPage.proxima();
})

When("clico no botão Anterior", () => {
    listarPage.anterior();
})

When("clico na opcão de confirmar", () => {
    listarPage.confirmar();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users/**", {
        statusCode: 204
    })
})

Then("vou para a próxima página", () => {
    listarPage.paginaDois();
})

Then("volto para a página anterior", () => {
    listarPage.paginaUm();
})

Then("me mantenho na tela principal", () => {
    criarPage.telaPrincipal();
})

Then("visualizo a lista de usuários cadastrados", () => {
    listarPage.lista();
})

Then("visualizo a mensagem de nenhum usuário cadastrado", () => {
    listarPage.nenhumUsuario();
})

Then("consigo clicar no botão para ser direcionaddo para a página de cadastro", () => {
    listarPage.direcionadoParaCadastro();
})