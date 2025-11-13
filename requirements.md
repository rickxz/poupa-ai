Critérios de Aceite (BDD) - MVP Poupa AÍ

Este documento detalha os critérios de aceite para o MVP do "Poupa AÍ", organizados por User Story para rastreamento no GitHub.

## 📋 Definições e Regras Gerais

### Formatos de Dados
- **Moeda (BRL)**: Formato brasileiro com 2 casas decimais (ex: R$ 1.500,00)
- **Data**: Formato DD/MM/AAAA (ex: 15/03/2024)
- **E-mail**: Validação RFC 5322 (ex: usuario@exemplo.com)
- **Senha**: Mínimo 6 caracteres, sem restrições especiais obrigatórias no MVP

### Regras de Negócio Gerais
- Todas as operações financeiras são calculadas em tempo real
- O saldo é calculado como: Total de Receitas - Total de Despesas
- Transações são vinculadas ao usuário logado (isolamento de dados)
- Categorias podem ser compartilhadas entre Receitas e Despesas
- Uma categoria só pode ser excluída se não tiver transações associadas

### Mensagens Padrão
- **Sucesso**: "Operação realizada com sucesso!"
- **Erro genérico**: "Ocorreu um erro. Tente novamente."
- **Validação**: Mensagens específicas por campo (ver detalhes abaixo)

### Definition of Done
Uma funcionalidade é considerada "pronta" quando:
- ✅ Todos os cenários BDD foram implementados e testados
- ✅ Validações de frontend e backend estão implementadas
- ✅ Mensagens de erro e sucesso estão padronizadas
- ✅ Interface responsiva funciona em mobile (≤768px)
- ✅ Código revisado e sem erros de lint
- ✅ Testes unitários cobrem casos principais

---

🎯 User Story 1: Gerenciar Acesso e Perfil (Autenticação)

Como um visitante ou usuário, Eu quero poder me cadastrar e logar no sistema com segurança e gerenciar meu perfil, Para que eu possa acessar meu dashboard financeiro e manter meus dados atualizados.

### Campos do Formulário de Cadastro
- **Nome** (obrigatório): Texto livre, mínimo 2 caracteres, máximo 100 caracteres
- **E-mail** (obrigatório): Formato válido de e-mail, máximo 255 caracteres
- **Senha** (obrigatório): Mínimo 6 caracteres, máximo 50 caracteres
- **Confirmar Senha** (obrigatório): Deve ser igual à senha

### Campos do Formulário de Login
- **E-mail** (obrigatório): Formato válido de e-mail
- **Senha** (obrigatório): Mínimo 6 caracteres

### Campos do Formulário de Perfil
- **Nome** (obrigatório): Texto livre, mínimo 2 caracteres, máximo 100 caracteres
- **E-mail** (obrigatório, não editável no MVP): Formato válido de e-mail

| ID | Requisito Funcional (RF) | Cenário de Aceite (BDD) |
|---|---|---|
| RF01 | Cadastro de novo usuário. | **Cenário 1.1: Cadastro de novo usuário com sucesso**<br><br>- Dado que eu sou um visitante na página de "Cadastro"<br>- Quando eu preencho:<br>  - Nome: "João Silva"<br>  - E-mail: "joao.silva@exemplo.com"<br>  - Senha: "senha123"<br>  - Confirmar Senha: "senha123"<br>- E clico no botão "Cadastrar"<br>- Então minha conta é criada no sistema<br>- E sou redirecionado para o Dashboard<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 1.2: Tentativa de cadastro com e-mail inválido**<br><br>- Dado que eu sou um visitante na página de "Cadastro"<br>- Quando eu preencho o campo "e-mail" com "email-invalido"<br>- E clico no botão "Cadastrar"<br>- Então eu permaneço na página de "Cadastro"<br>- E vejo uma mensagem de erro "Formato de e-mail inválido" abaixo do campo<br><br>**Cenário 1.3: Tentativa de cadastro com e-mail já cadastrado**<br><br>- Dado que existe um usuário cadastrado com e-mail "joao@exemplo.com"<br>- E eu sou um visitante na página de "Cadastro"<br>- Quando eu preencho o campo "e-mail" com "joao@exemplo.com"<br>- E preencho os demais campos válidos<br>- E clico no botão "Cadastrar"<br>- Então eu permaneço na página de "Cadastro"<br>- E vejo uma mensagem de erro "Este e-mail já está cadastrado"<br><br>**Cenário 1.4: Tentativa de cadastro com senha muito curta**<br><br>- Dado que eu sou um visitante na página de "Cadastro"<br>- Quando eu preencho o campo "Senha" com "12345" (5 caracteres)<br>- E preencho os demais campos válidos<br>- E clico no botão "Cadastrar"<br>- Então eu permaneço na página de "Cadastro"<br>- E vejo uma mensagem de erro "A senha deve ter no mínimo 6 caracteres"<br><br>**Cenário 1.5: Tentativa de cadastro com senhas não coincidentes**<br><br>- Dado que eu sou um visitante na página de "Cadastro"<br>- Quando eu preencho:<br>  - Senha: "senha123"<br>  - Confirmar Senha: "senha456"<br>- E preencho os demais campos válidos<br>- E clico no botão "Cadastrar"<br>- Então eu permaneço na página de "Cadastro"<br>- E vejo uma mensagem de erro "As senhas não coincidem"<br><br>**Cenário 1.6: Tentativa de cadastro com campos obrigatórios vazios**<br><br>- Dado que eu sou um visitante na página de "Cadastro"<br>- Quando eu deixo o campo "Nome" vazio<br>- E clico no botão "Cadastrar"<br>- Então eu permaneço na página de "Cadastro"<br>- E vejo uma mensagem de erro "O campo Nome é obrigatório" |
| RF02 | Login de usuário. | **Cenário 2.1: Login de usuário com sucesso**<br><br>- Dado que eu sou um usuário cadastrado com:<br>  - E-mail: "joao@exemplo.com"<br>  - Senha: "senha123"<br>- E estou na página de "Login"<br>- Quando eu preencho:<br>  - E-mail: "joao@exemplo.com"<br>  - Senha: "senha123"<br>- E clico no botão "Entrar"<br>- Então eu sou autenticado com sucesso<br>- E sou redirecionado para o "Dashboard Principal"<br>- E vejo meus dados financeiros<br><br>**Cenário 2.2: Tentativa de login com senha incorreta**<br><br>- Dado que eu sou um usuário cadastrado com e-mail "joao@exemplo.com"<br>- E estou na página de "Login"<br>- Quando eu preencho:<br>  - E-mail: "joao@exemplo.com"<br>  - Senha: "senha-errada"<br>- E clico no botão "Entrar"<br>- Então eu permaneço na página de "Login"<br>- E vejo uma mensagem de erro "E-mail ou senha inválidos"<br><br>**Cenário 2.3: Tentativa de login com e-mail não cadastrado**<br><br>- Dado que não existe um usuário com e-mail "inexistente@exemplo.com"<br>- E estou na página de "Login"<br>- Quando eu preencho:<br>  - E-mail: "inexistente@exemplo.com"<br>  - Senha: "qualquersenha"<br>- E clico no botão "Entrar"<br>- Então eu permaneço na página de "Login"<br>- E vejo uma mensagem de erro "E-mail ou senha inválidos"<br><br>**Cenário 2.4: Tentativa de login com campos vazios**<br><br>- Dado que eu estou na página de "Login"<br>- Quando eu deixo o campo "E-mail" vazio<br>- E clico no botão "Entrar"<br>- Então eu permaneço na página de "Login"<br>- E vejo uma mensagem de erro "O campo E-mail é obrigatório" |
| RF03 | Edição de dados de perfil. | **Cenário 3.1: Edição de dados do usuário com sucesso**<br><br>- Dado que eu estou logado<br>- E estou na página "Meu Perfil"<br>- E meu nome atual é "João Silva"<br>- Quando eu altero o campo "Nome" para "João Silva Santos"<br>- E clico no botão "Salvar Alterações"<br>- Então meus dados são atualizados no sistema<br>- E vejo uma mensagem de sucesso "Perfil atualizado com sucesso!"<br>- E o nome exibido no perfil é "João Silva Santos"<br><br>**Cenário 3.2: Tentativa de edição com nome muito curto**<br><br>- Dado que eu estou logado na página "Meu Perfil"<br>- Quando eu altero o campo "Nome" para "A" (1 caractere)<br>- E clico no botão "Salvar Alterações"<br>- Então eu permaneço na página "Meu Perfil"<br>- E vejo uma mensagem de erro "O nome deve ter no mínimo 2 caracteres"<br><br>**Cenário 3.3: Tentativa de edição com nome vazio**<br><br>- Dado que eu estou logado na página "Meu Perfil"<br>- Quando eu apago todo o conteúdo do campo "Nome"<br>- E clico no botão "Salvar Alterações"<br>- Então eu permaneço na página "Meu Perfil"<br>- E vejo uma mensagem de erro "O campo Nome é obrigatório" |

---

🎯 User Story 2: Rastrear Movimentações Financeiras (CRUD)

Como um usuário logado, Eu quero registrar, editar e excluir minhas receitas e despesas no sistema, Para que eu possa manter meu controle financeiro manual completo e preciso.

### Campos do Formulário de Transação
- **Tipo** (obrigatório): Seleção entre "Receita" ou "Despesa"
- **Descrição** (obrigatório): Texto livre, mínimo 3 caracteres, máximo 200 caracteres
- **Valor** (obrigatório): Número decimal positivo, mínimo 0,01, máximo 999.999.999,99
- **Categoria** (obrigatório): Seleção de categoria existente ou criação de nova
- **Data** (opcional no MVP): Data da transação (padrão: data atual)

### Regras de Negócio
- Valores devem ser sempre positivos (não aceitar valores negativos ou zero)
- O saldo é recalculado automaticamente após qualquer operação CRUD (RF16)
- Transações são ordenadas por data (mais recente primeiro)
- Usuário só pode visualizar e editar suas próprias transações

| ID | Requisito Funcional (RF) | Cenário de Aceite (BDD) |
|---|---|---|
| RF04, RF09 | Cadastrar Receita (Nova Transação). | **Cenário 4.1: Registrar uma nova Receita com sucesso**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- E existe a categoria "Salário" cadastrada<br>- Quando eu clico em "Nova Transação"<br>- E seleciono o tipo "Receita"<br>- E preencho:<br>  - Descrição: "Salário mensal"<br>  - Valor: "5000,00"<br>  - Categoria: "Salário"<br>- E clico no botão "Salvar"<br>- Então a nova receita é exibida na lista de transações<br>- E o "Saldo Atual" é atualizado (RF16)<br>- E o "Total de Receitas" é atualizado (RF16)<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 4.2: Tentativa de cadastrar receita com campos obrigatórios vazios**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Receita"<br>- E deixo o campo "Descrição" vazio<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "O campo Descrição é obrigatório"<br><br>**Cenário 4.3: Tentativa de cadastrar receita com valor zero**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Receita"<br>- E preencho o campo "Valor" com "0,00"<br>- E preencho os demais campos obrigatórios<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "O valor deve ser maior que zero"<br><br>**Cenário 4.4: Tentativa de cadastrar receita com valor negativo**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Receita"<br>- E preencho o campo "Valor" com "-100,00"<br>- E preencho os demais campos obrigatórios<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "O valor deve ser maior que zero"<br><br>**Cenário 4.5: Tentativa de cadastrar receita com descrição muito curta**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Receita"<br>- E preencho o campo "Descrição" com "AB" (2 caracteres)<br>- E preencho os demais campos obrigatórios<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "A descrição deve ter no mínimo 3 caracteres" |
| RF05, RF09 | Cadastrar Despesa (Nova Transação). | **Cenário 5.1: Registrar uma nova Despesa com sucesso**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- E existe a categoria "Alimentação" cadastrada<br>- Quando eu clico em "Nova Transação"<br>- E seleciono o tipo "Despesa"<br>- E preencho:<br>  - Descrição: "Supermercado mensal"<br>  - Valor: "350,00"<br>  - Categoria: "Alimentação"<br>- E clico no botão "Salvar"<br>- Então a nova despesa é exibida na lista de transações<br>- E o "Saldo Atual" é atualizado (RF16)<br>- E o "Total de Despesas" é atualizado (RF16)<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 5.2: Tentativa de cadastrar despesa sem categoria selecionada**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Despesa"<br>- E preencho Descrição e Valor<br>- E não seleciono nenhuma categoria<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "O campo Categoria é obrigatório"<br><br>**Cenário 5.3: Tentativa de cadastrar despesa com valor muito alto**<br><br>- Dado que estou logado no "Dashboard Principal"<br>- Quando eu clico em "Nova Transação" e seleciono "Despesa"<br>- E preencho o campo "Valor" com "1000000000,00" (valor acima do máximo)<br>- E preencho os demais campos obrigatórios<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário<br>- E vejo uma mensagem de erro "O valor máximo permitido é R$ 999.999.999,99" |
| RF06, RF07 | Editar uma transação existente. | **Cenário 6.1: Editar o valor de uma Despesa com sucesso**<br><br>- Dado que existe uma despesa registrada:<br>  - Descrição: "Supermercado"<br>  - Valor: R$ 200,00<br>  - Categoria: "Alimentação"<br>- E o Saldo Atual é R$ 3.500,00<br>- Quando eu clico em "Editar" na transação<br>- E altero o "Valor" para "250,00"<br>- E clico no botão "Salvar"<br>- Então a transação é atualizada com o novo valor na lista<br>- E o "Saldo Atual" é recalculado para R$ 3.450,00 (RF16)<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 6.2: Editar a descrição de uma Receita**<br><br>- Dado que existe uma receita registrada:<br>  - Descrição: "Salário"<br>  - Valor: R$ 5.000,00<br>- Quando eu clico em "Editar" na transação<br>- E altero a "Descrição" para "Salário mensal - Janeiro"<br>- E clico no botão "Salvar"<br>- Então a transação é atualizada com a nova descrição na lista<br>- E o saldo permanece inalterado<br><br>**Cenário 6.3: Editar a categoria de uma transação**<br><br>- Dado que existe uma despesa registrada com categoria "Alimentação"<br>- E existe a categoria "Lazer" cadastrada<br>- Quando eu clico em "Editar" na transação<br>- E altero a "Categoria" para "Lazer"<br>- E clico no botão "Salvar"<br>- Então a transação é atualizada com a nova categoria<br>- E a categoria "Lazer" aparece na transação<br><br>**Cenário 6.4: Tentativa de editar transação com valor inválido**<br><br>- Dado que existe uma transação registrada<br>- Quando eu clico em "Editar" na transação<br>- E altero o "Valor" para "-50,00"<br>- E clico no botão "Salvar"<br>- Então eu permaneço no formulário de edição<br>- E vejo uma mensagem de erro "O valor deve ser maior que zero" |
| RF08 | Excluir uma transação. | **Cenário 8.1: Excluir uma transação e atualizar o saldo**<br><br>- Dado que existe uma despesa registrada:<br>  - Valor: R$ 500,00<br>- E o Saldo Atual é R$ 3.500,00<br>- Quando eu clico em "Excluir" na transação<br>- E confirmo a exclusão no diálogo de confirmação<br>- Então a transação não é mais exibida na lista<br>- E o "Saldo Atual" é recalculado para R$ 4.000,00 (RF16)<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 8.2: Cancelar exclusão de transação**<br><br>- Dado que existe uma transação registrada<br>- Quando eu clico em "Excluir" na transação<br>- E clico em "Cancelar" no diálogo de confirmação<br>- Então o diálogo é fechado<br>- E a transação permanece na lista<br>- E o saldo não é alterado<br><br>**Cenário 8.3: Excluir receita e verificar atualização do saldo**<br><br>- Dado que existe uma receita registrada:<br>  - Valor: R$ 1.000,00<br>- E o Saldo Atual é R$ 3.500,00<br>- Quando eu clico em "Excluir" na receita<br>- E confirmo a exclusão<br>- Então a receita não é mais exibida<br>- E o "Saldo Atual" é recalculado para R$ 2.500,00 (RF16)<br>- E o "Total de Receitas" é atualizado |

---

🎯 User Story 3: Organizar Dados com Categorias

Como um usuário, Eu quero ter controle total sobre as categorias de minhas despesas e receitas, Para que eu possa criar relatórios específicos e organizar minha visualização de gastos.

### Campos do Formulário de Categoria
- **Nome** (obrigatório): Texto livre, mínimo 2 caracteres, máximo 50 caracteres
- **Tipo** (opcional no MVP): Seleção entre "Receita" ou "Despesa" (padrão: ambas)

### Regras de Negócio
- Categorias são únicas por nome (não pode haver duas categorias com o mesmo nome)
- Uma categoria só pode ser excluída se não tiver transações associadas
- Ao excluir uma categoria, todas as transações que a utilizam devem ser atualizadas (ou impedir exclusão)
- Categorias são vinculadas ao usuário (isolamento de dados)

| ID | Requisito Funcional (RF) | Cenário de Aceite (BDD) |
|---|---|---|
| RF10 | Criar nova categoria. | **Cenário 10.1: Criar categoria de Despesa com sucesso**<br><br>- Dado que estou logado<br>- E estou na tela de "Gerenciar Categorias"<br>- Quando eu preencho o campo "Nome" com "Lazer"<br>- E clico no botão "Salvar Categoria"<br>- Então a categoria "Lazer" é criada no sistema<br>- E a categoria "Lazer" está disponível na lista de seleção de transações<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 10.2: Tentativa de criar categoria com nome duplicado**<br><br>- Dado que existe a categoria "Alimentação" cadastrada<br>- E estou na tela de "Gerenciar Categorias"<br>- Quando eu preencho o campo "Nome" com "Alimentação"<br>- E clico no botão "Salvar Categoria"<br>- Então eu permaneço na tela de "Gerenciar Categorias"<br>- E vejo uma mensagem de erro "Já existe uma categoria com este nome"<br><br>**Cenário 10.3: Tentativa de criar categoria com nome muito curto**<br><br>- Dado que estou na tela de "Gerenciar Categorias"<br>- Quando eu preencho o campo "Nome" com "A" (1 caractere)<br>- E clico no botão "Salvar Categoria"<br>- Então eu permaneço na tela<br>- E vejo uma mensagem de erro "O nome da categoria deve ter no mínimo 2 caracteres"<br><br>**Cenário 10.4: Tentativa de criar categoria com nome vazio**<br><br>- Dado que estou na tela de "Gerenciar Categorias"<br>- Quando eu deixo o campo "Nome" vazio<br>- E clico no botão "Salvar Categoria"<br>- Então eu permaneço na tela<br>- E vejo uma mensagem de erro "O campo Nome é obrigatório" |
| RF11 | Editar categoria existente. | **Cenário 11.1: Renomear Categoria com sucesso**<br><br>- Dado que existe a categoria "Lazer" cadastrada<br>- E não há transações associadas a esta categoria<br>- Quando eu clico em "Editar" na categoria "Lazer"<br>- E altero o nome para "Lazer e Cultura"<br>- E clico em "Salvar"<br>- Então o nome "Lazer e Cultura" é exibido na lista de categorias<br>- E o nome "Lazer e Cultura" aparece nos formulários de transação<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 11.2: Editar categoria que possui transações associadas**<br><br>- Dado que existe a categoria "Alimentação"<br>- E existem 3 transações associadas a esta categoria<br>- Quando eu clico em "Editar" na categoria "Alimentação"<br>- E altero o nome para "Alimentação e Bebidas"<br>- E clico em "Salvar"<br>- Então o nome é atualizado<br>- E todas as 3 transações passam a exibir a nova categoria "Alimentação e Bebidas"<br><br>**Cenário 11.3: Tentativa de editar categoria para nome duplicado**<br><br>- Dado que existem as categorias "Lazer" e "Entretenimento"<br>- Quando eu clico em "Editar" na categoria "Lazer"<br>- E altero o nome para "Entretenimento"<br>- E clico em "Salvar"<br>- Então eu permaneço no formulário de edição<br>- E vejo uma mensagem de erro "Já existe uma categoria com este nome" |
| RF12 | Excluir categorias. | **Cenário 12.1: Excluir uma categoria sem uso**<br><br>- Dado que existe a categoria "Teste" cadastrada<br>- E não há transações associadas a esta categoria<br>- Quando eu clico em "Excluir" na categoria "Teste"<br>- E confirmo a exclusão no diálogo<br>- Então a categoria "Teste" é removida do sistema<br>- E a categoria não aparece mais na lista de seleção<br>- E vejo uma mensagem de sucesso<br><br>**Cenário 12.2: Tentativa de excluir categoria com transações associadas**<br><br>- Dado que existe a categoria "Alimentação"<br>- E existem 2 transações associadas a esta categoria<br>- Quando eu clico em "Excluir" na categoria "Alimentação"<br>- E confirmo a exclusão<br>- Então eu permaneço na tela de "Gerenciar Categorias"<br>- E vejo uma mensagem de erro "Não é possível excluir esta categoria pois existem transações associadas a ela"<br>- E a categoria permanece no sistema<br><br>**Cenário 12.3: Cancelar exclusão de categoria**<br><br>- Dado que existe a categoria "Lazer" sem transações associadas<br>- Quando eu clico em "Excluir" na categoria "Lazer"<br>- E clico em "Cancelar" no diálogo de confirmação<br>- Então o diálogo é fechado<br>- E a categoria permanece na lista |

---

🎯 User Story 4: Visualizar a Saúde Financeira (Dashboard)

Como um usuário logado, Eu quero ver um painel visual e resumido da minha situação financeira ao acessar o sistema, Para que eu possa tomar decisões rápidas sobre meu orçamento.

### Regras de Negócio do Dashboard
- Saldo Atual = Total de Receitas - Total de Despesas
- Todos os cálculos são feitos em tempo real (RF16)
- Valores são exibidos no formato brasileiro (R$ X.XXX,XX)
- Gráficos são atualizados automaticamente quando há mudanças nas transações
- Se não houver transações, os valores devem ser R$ 0,00

### Dependência RF16
O RF16 (Atualização automática do saldo) é uma dependência crítica que deve funcionar em conjunto com:
- RF04/RF05: Ao criar transação
- RF06/RF07: Ao editar transação
- RF08: Ao excluir transação
- RF13/RF14/RF15: Ao exibir KPIs

| ID | Requisito Funcional (RF) | Cenário de Aceite (BDD) |
|---|---|---|
| RF13/RF14/RF15 | Exibição dos KPIs (Saldo, Receitas, Despesas). | **Cenário 13.1: Verificação dos KPIs do Dashboard com dados**<br><br>- Dado que eu tenho:<br>  - 3 receitas totalizando R$ 5.000,00<br>  - 2 despesas totalizando R$ 1.500,00<br>- Quando eu acesso o "Dashboard Principal"<br>- Então devo ver:<br>  - Saldo Atual: R$ 3.500,00<br>  - Total de Receitas: R$ 5.000,00<br>  - Total de Despesas: R$ 1.500,00<br><br>**Cenário 13.2: Verificação dos KPIs sem transações**<br><br>- Dado que eu sou um usuário recém-cadastrado<br>- E não tenho nenhuma transação cadastrada<br>- Quando eu acesso o "Dashboard Principal"<br>- Então devo ver:<br>  - Saldo Atual: R$ 0,00<br>  - Total de Receitas: R$ 0,00<br>  - Total de Despesas: R$ 0,00<br><br>**Cenário 13.3: Verificação dos KPIs com saldo negativo**<br><br>- Dado que eu tenho:<br>  - Receitas totalizando R$ 1.000,00<br>  - Despesas totalizando R$ 2.500,00<br>- Quando eu acesso o "Dashboard Principal"<br>- Então devo ver:<br>  - Saldo Atual: R$ -1.500,00 (exibido em vermelho ou com indicador negativo)<br>  - Total de Receitas: R$ 1.000,00<br>  - Total de Despesas: R$ 2.500,00<br><br>**Cenário 13.4: Verificação do formato de moeda nos KPIs**<br><br>- Dado que eu tenho receitas totalizando R$ 1500,50<br>- Quando eu acesso o "Dashboard Principal"<br>- Então o Total de Receitas deve ser exibido como "R$ 1.500,50" (com separador de milhar e duas casas decimais) |
| RF16 | Atualização automática do saldo. | **Cenário 16.1: Recálculo imediato após exclusão de despesa**<br><br>- Dado que o Saldo Atual é R$ 3.500,00<br>- E existe uma despesa de R$ 500,00<br>- Quando eu excluo a despesa de R$ 500,00<br>- Então o Saldo Atual é atualizado automaticamente para R$ 4.000,00<br>- E a atualização ocorre sem necessidade de recarregar a página<br><br>**Cenário 16.2: Recálculo imediato após criação de receita**<br><br>- Dado que o Saldo Atual é R$ 1.000,00<br>- Quando eu crio uma nova receita de R$ 2.500,00<br>- Então o Saldo Atual é atualizado automaticamente para R$ 3.500,00<br>- E o Total de Receitas é atualizado<br><br>**Cenário 16.3: Recálculo imediato após edição de transação**<br><br>- Dado que existe uma despesa de R$ 200,00<br>- E o Saldo Atual é R$ 3.500,00<br>- Quando eu edito a despesa e altero o valor para R$ 300,00<br>- Então o Saldo Atual é atualizado automaticamente para R$ 3.400,00<br>- E o Total de Despesas é atualizado<br><br>**Cenário 16.4: Recálculo após múltiplas operações sequenciais**<br><br>- Dado que o Saldo Atual é R$ 1.000,00<br>- Quando eu:<br>  1. Crio uma receita de R$ 500,00<br>  2. Crio uma despesa de R$ 200,00<br>  3. Edito a receita para R$ 600,00<br>- Então após cada operação o Saldo Atual é atualizado corretamente<br>- E após todas as operações o Saldo Atual é R$ 1.400,00 |
| RF17 | Geração de Relatórios Visuais Básicos. | **Cenário 17.1: Visualização do Gráfico de Gastos por Categoria**<br><br>- Dado que tenho despesas distribuídas por categoria:<br>  - Alimentação: R$ 500,00 (50%)<br>  - Transporte: R$ 300,00 (30%)<br>  - Lazer: R$ 200,00 (20%)<br>- Quando eu visualizo o gráfico de gastos por categoria no Dashboard<br>- Então o gráfico (pizza ou barras) deve representar corretamente:<br>  - Alimentação: 50%<br>  - Transporte: 30%<br>  - Lazer: 20%<br>- E os valores devem estar visíveis no gráfico ou na legenda<br><br>**Cenário 17.2: Visualização do gráfico sem dados**<br><br>- Dado que não tenho nenhuma despesa cadastrada<br>- Quando eu acesso o Dashboard<br>- Então o gráfico deve exibir uma mensagem "Nenhum dado disponível" ou gráfico vazio<br><br>**Cenário 17.3: Atualização do gráfico após nova transação**<br><br>- Dado que tenho despesas por categoria exibidas no gráfico<br>- Quando eu crio uma nova despesa na categoria "Alimentação"<br>- Então o gráfico é atualizado automaticamente<br>- E a porcentagem da categoria "Alimentação" é recalculada<br><br>**Cenário 17.4: Visualização do gráfico com muitas categorias**<br><br>- Dado que tenho despesas em 10 categorias diferentes<br>- Quando eu visualizo o gráfico de gastos por categoria<br>- Então todas as categorias devem estar representadas<br>- E o gráfico deve ser legível (com scroll ou agrupamento se necessário) |

---

🔒 Requisitos Não Funcionais (RNF) - Critérios de Aceite

| ID | Requisito Não Funcional (RNF) | Critério de Aceite (RNF) |
|---|---|---|
| RNF06 | Estética Visual | A interface deve replicar o estilo "premium", "dark mode" e "cinematográfico" definido. Todas as telas devem seguir o mesmo padrão visual consistente. |
| RNF03 | Responsividade | O layout deve se reajustar para telas de largura inferior a 768px (Mobile/Tablet) sem quebra de layout ou barras de rolagem horizontais. Todos os formulários e gráficos devem ser utilizáveis em dispositivos móveis. |
| RNF10 | Stack Frontend | O Frontend deve ser desenvolvido em React com TypeScript. Todas as interfaces devem ser tipadas. |
| RNF11 | Stack Backend | O Backend deve ser desenvolvido em Node.js com TypeScript. Todas as APIs devem ser tipadas e seguir padrões REST. |
| RNF12 | Banco de Dados | O banco de dados para persistência deve ser PostgreSQL (pgsql). Todas as tabelas devem ter chaves primárias e índices apropriados. |
| RNF14 | Segurança | Todas as senhas de usuários devem ser armazenadas com hashing (ex: bcrypt) no banco de dados. Nenhuma senha em texto plano deve ser armazenada ou transmitida. Tokens de autenticação devem ser utilizados para sessões. |
| RNF07 | Estabilidade | A aplicação deve ser estável e não apresentar falhas sob operações CRUD sequenciais (teste de stress básico: mínimo 50 operações sequenciais sem erros). A aplicação deve tratar erros de forma elegante sem travar. |

(RNF01, RNF02, RNF04, RNF05, RNF08, RNF09, RNF13 já estão cobertos ou implicitamente contidos nos critérios acima.)

---

## 📝 Notas de Implementação

### Priorização Sugerida (MVP)
1. **Fase 1**: RF01, RF02 (Autenticação básica)
2. **Fase 2**: RF04, RF05, RF16 (CRUD básico de transações)
3. **Fase 3**: RF13/RF14/RF15, RF17 (Dashboard e visualizações)
4. **Fase 4**: RF10, RF11, RF12 (Gerenciamento de categorias)
5. **Fase 5**: RF03, RF06, RF07, RF08 (Funcionalidades complementares)

### Dependências Críticas
- RF16 deve ser implementado junto com RF04, RF05, RF06, RF07, RF08
- RF17 depende de RF10 (categorias devem existir para gerar gráficos)
- RF13/RF14/RF15 dependem de RF04 e RF05 (precisa ter transações para calcular KPIs)
