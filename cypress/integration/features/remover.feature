Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar a mensagem para remover o usuário
        Given acesso a tela principal para excluir um usuário
        When eu seleciono o ícone da lixeira
        # @ignore
        Scenario: Remover um usuário
            And clico na opcão de confirmar
            Then visualizo a mensagem de sucesso
            | mensagem | Usuário removido! |
        
        Scenario: Cancelar a remoção do usuário pela opção "Cancelar"
            And clico na opção de Cancelar
            Then retorno para a tela principal

        Scenario: Cancelar a remoção do usuário pelo ícone "X"
            And clico no ícone X
            Then retorno para a tela principal