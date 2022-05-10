Feature: Listar usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Background: Acessar o site
        Given acesso a tela principal

        Scenario: Visualizar usuários cadastrados
            Then visualizo a lista de usuários cadastrados

        Scenario: Visualizar lista vazia
            And não tenho nenhum usuário cadastrados
            Then visualizo a mensagem de nenhum usuário cadastrado
            And consigo clicar no botão para ser direcionaddo para a página de cadastro

        Scenario: Verificar o botão "Próxima"
            When clico no botão Próxima
            Then vou para a próxima página

        Scenario: Verificar o botão "Anterior"
            When clico no botão Próxima
            And clico no botão Anterior
            Then volto para a página anterior

        Scenario: Clicar no ícone principal do C.R.U.D
            When clico no ícone principal
            Then me mantenho na tela principal
