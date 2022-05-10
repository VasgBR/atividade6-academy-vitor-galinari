import { removerPage } from "../pages/removerPage.po"

Given("acesso a tela principal para excluir um usuário", () => {
    removerPage.tela();
})

When("eu seleciono o ícone da lixeira", () => {
    removerPage.lixeira();
})

When("clico na opção de confirmar", () => {
    removerPage.confirmar();
})

When("clico na opção de Cancelar", () => {
    removerPage.cancelar();
})

When('clico no ícone X', () => {
    removerPage.x();
})

Then("retorno para a tela principal", () => {
    removerPage.telaPrincipal();
})