import { listarPage } from "../pages/listarPage.po"
import { atualizarPage } from "../pages/atualizarPage.po"
import { criarPage } from "../pages/criarPage.po"

Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
})

Given("clico na opção Ver detalhes de qualquer usuário que eu queira atualizar", () => {
    listarPage.verDetalhes();
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
})

When("altero o email para o email de outro usuário", (tabela) =>{
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmailJaExistente(dadosTabela.emailDeOutroUsuario);
})