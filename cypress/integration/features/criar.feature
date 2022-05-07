Feature: Criar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a tela de cadastrar
        Given acesso a tela principal
        And clico na opção novo

        Scenario: Registra um novo usuário
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email válido
            | email | vitor@galinari.com |
            And clico em salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Usuário salvo com sucesso! |

        Scenario: Registrar um novo usuário com email já existente
            When cadastro um usuário com sucesso
            | nome  | Vitor Galinari     |
            | email | vitor@galinari.com |
            And informo um nome válido
            | nome | GalinariVitor |
            And informo um email já existente
            | email | vitor@galinari.com |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | Usuário já existente |

        Scenario: Registrar um novo usuário sem o nome
            When informo um email válido
            | email | vitor@galinari.com |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo nome é obrigatório. |

        Scenario: Registrar um novo usuário sem o email
            When informo um nome válido
            | nome | Vitor Galinari |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
        
        Scenario: Registrar um novo usuário sem o nome e email
            When clico em salvar
            Then visualizo as mensagens de erro
            | mensagem1 | O campo nome é obrigatório.   |
            | mensagem2 | O campo e-mail é obrigatório. |

        Scenario: Registrar um novo usuário com email sem o @
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email inválido
            | email | vitorgalinari.com |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |

        Scenario: Registrar um novo usuário com email sem o .com
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email inválido
            | email | vitor@galinari |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |

        Scenario: Registrar um usuário com mais de 100 caracteres no nome
            When informo um nome inválido
            | nome | VitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorVitorV |
            And informo um email válido
            | email | vitor@galinari.com |
            And clico em salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Informe no máximo 100 caracteres para o nome |

        Scenario: Registrar um usuário com mais de 60 caracteres no email
            When informo um nome válido
            | nome | Vitor Galinari |
            And informo um email inválido
            | email | vitorvitorvitorvitorvitor@galinarigalinarigalinarigalinar.com |
            And clico em salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Informe no máximo 60 caracteres para o email |

        Scenario: Registrar um usuário com menos de 4 caracteres no nome
            When informo um nome inválido
            | nome | Vas |
            And informo um email válido
            | email | vitor@galinari.com |
            And clico em salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |


        Scenario: Clicar na opção de "voltar"
            When clico na opção voltar
            Then volto para a tela principal

        Scenario: Clicar no ícone principal do C.R.U.D
            When clico no ícone principal
            Then volto para a tela principal
