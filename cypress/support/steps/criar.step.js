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
})

When("cadastro um usuário com sucesso", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email);
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