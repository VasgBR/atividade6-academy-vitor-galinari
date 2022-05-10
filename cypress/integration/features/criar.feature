Feature: Criar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a tela de cadastrar
        Given acesso a tela principal
        And acesso a página de cadastrar através da opção Novo
        #@ignore
        Scenario: Registra um novo usuário
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email válido
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Usuário salvo com sucesso! |
        #@ignore
        Scenario: Registrar um novo usuário com email já existente
            When tenho um usuário cadastrado
            | nome  | Vitor Galinari     |
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            And informo um nome válido
            | nome | GalinariVitor |
            And informo um email já existente
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. |
        #@ignore
        Scenario: Registrar um novo usuário sem o nome
            When informo um email válido
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo nome é obrigatório. |
        #@ignore
        Scenario: Registrar um novo usuário sem o email
            When informo um nome válido
            | nome | Vitor Galinari |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
        #@ignore
        Scenario: Registrar um novo usuário sem o nome e email
            When confirmo o formulário através do botão Salvar
            Then visualizo as mensagens de erro
            | mensagem1 | O campo nome é obrigatório.   |
            | mensagem2 | O campo e-mail é obrigatório. |
        #@ignore
        Scenario: Registrar um novo usuário com email sem o @
            When informo um nome válido
            | nome | Vitor Galinari |
            And confirmo o formulário através do botão Salvar
            And informo um email inválido
            | email | vitorgalinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |
        #@ignore
        Scenario: Registrar um novo usuário com email sem o .com
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email inválido
            | email | vitor@galinari |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |
        #@ignore
        Scenario: Registrar um usuário com mais de 100 caracteres no nome
            When informo um nome inválido
            | nome | VitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorV |
            And informo um email válido
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
        #@ignore
        Scenario: Registrar um usuário com mais de 60 caracteres no email
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email inválido
            | email | vitorvitorvitorvitorvitor@galinarigalinarigalinarigalinar.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |
        #@ignore
        Scenario: Registrar um usuário com menos de 4 caracteres no nome
            When informo um nome inválido
            | nome | Vas |
            And informo um email válido
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |
        #@ignore
        Scenario: Clicar na opção de "voltar"
            When clico na opção voltar
            Then volto para a tela principal
        #@ignore
        Scenario: Clicar no ícone principal do C.R.U.D
            When clico no ícone principal
            Then volto para a tela principal
