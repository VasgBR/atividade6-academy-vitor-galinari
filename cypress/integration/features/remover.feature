Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Informações importantes
        Given acesso a tela principal
        @ignore
        Scenario: Remover um usuário
            When eu seleciono o ícone da lixeira
            And clico na opção de confirmar
            Then visualizo a mensagem de sucesso
            | mensagem | Usuário removido! |
        
        Scenario: Cancelar a remoção do usuário pela opção "Cancelar"
            When eu seleciono o ícone da lixeira
            And clico na opção de Cancelar
            Then retorno para a tela principal

        Scenario: Cancelar a remoção do usuário pelo ícone "X"
            When eu seleciono o ícone da lixeira
            And clico no ícone X
            Then retorno para a tela principal