import { listarPage } from "../pages/listarPage.po"
import { atualizarPage } from "../pages/atualizarPage.po"
import { criarPage } from "../pages/criarPage.po"
import { removerPage } from "../pages/removerPage.po"

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