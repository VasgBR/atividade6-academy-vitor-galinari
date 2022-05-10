Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Cria um usuário e acessar a tela para atualizar usuários
        Given acesso a tela principal
        And tenho usuários cadastrados
        And clico na opção Ver detalhes de qualquer usuário que eu queira atualizar
        
        Scenario: Atualizar informações de um usuário com sucesso
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | VitorGalinari |
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitor14@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Informações atualizadas com sucesso! |
    
        Scenario: Atualizar um usuário com email já existente
            When clico em Editar
            And apago o que está escrito no campo email
            And altero o email para o email de outro usuário
            | emailDeOutroUsuario | k@g.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. |
    
        Scenario: Atualizar um usuário sem o nome
            When clico em Editar
            And apago o que está escrito no campo nome
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitor14@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo nome é obrigatório. |
    
        Scenario: Atualizar um usuário sem o email
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | Vitor Galinari |
            And apago o que está escrito no campo email
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
    
        Scenario: Atualizar um usuário sem o nome e sem o email
            When clico em Editar
            And apago o que está escrito no campo nome
            And apago o que está escrito no campo email
            And confirmo o formulário através do botão Salvar
            Then visualizo as mensagens de erro
            | mensagem1 | O campo nome é obrigatório.   |
            | mensagem2 | O campo e-mail é obrigatório. |
    
        Scenario: Atualizar usuário com email sem o @
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | Vitor Galinari |
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitorgalinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |
    
        Scenario: Atualizar usuário com email sem o .com
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | Vitor Galinari |
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitor@galinari |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |
    
        Scenario: Atualizar um usuário com mais de 100 caracteres no nome
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | VitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorV |
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitor@galinari.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
    
        Scenario: Atualizar um usuário com mais de 60 caracteres no email
            When clico em Editar
            And apago o que está escrito no campo nome
            And altero o nome para um nome válido
            | nome | Vitor Galinari |
            And apago o que está escrito no campo email
            And altero o email para um email válido
            | email | vitorvitorvitorvitorvitor@galinarigalinarigalinarigalinar.com |
            And confirmo o formulário através do botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |

        Scenario: Cancelar a ação de atualizar o usuário
            When clico em Editar
            And clico em Cancelar
            Then vizualizo o botão de Editar novamente

    
        Scenario: Clicar na opção de "voltar"
            When clico na opção voltar
            Then volto para a tela principal
    
        Scenario: Clicar no ícone principal do C.R.U.D
            When clico no ícone principal
            Then volto para a tela principal