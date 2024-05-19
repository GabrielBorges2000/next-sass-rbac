# Next.js SaaS + RBAC

Este projeto contém todo o boilerplate necessário para configurar um SaaS multi-inquilino com Next.js, incluindo autenticação e autorização RBAC.

## Funcionalidades

### Autenticação

- [X] Deve ser capaz de autenticar usando e-mail e senha;
- [X] Deve ser capaz de autenticar usando conta do Github;
- [X] Deve ser capaz de recuperar senha usando e-mail;
- [x] Deve ser capaz de criar uma conta (e-mail, nome e senha);

### Organizações

- [ ] Deve ser capaz de criar uma nova organização;
- [ ] Deve ser capaz de obter organizações às quais o usuário pertence;
- [ ] Deve ser capaz de atualizar uma organização;
- [ ] Deve ser capaz de desativar uma organização;
- [ ] Deve ser capaz de transferir a propriedade da organização;

### Convites

- [ ] Deve ser capaz de convidar um novo membro (e-mail, função);
- [ ] Deve ser capaz de aceitar um convite;
- [ ] Deve ser capaz de revogar um convite pendente;

### Membros

- [ ] Deve ser capaz de obter membros da organização;
- [ ] Deve ser capaz de atualizar a função de um membro;

### Projetos

- [ ] Deve ser capaz de obter projetos dentro de uma organização;
- [ ] Deve ser capaz de criar um novo projeto (nome, URL, descrição);
- [ ] Deve ser capaz de atualizar um projeto (nome, URL, descrição);
- [ ] Deve ser capaz de excluir um projeto;

### Faturamento

- [ ] Deve ser capaz de obter detalhes de faturamento para a organização ($20 por projeto / $10 por membro excluindo função de faturamento);

## RBAC

Funções e permissões.

### Funções

- Proprietário (conta como administrador)
- Administrador
- Membro
- Faturamento (um por organização)
- Anônimo

### Tabela de Permissões

|                          | Administrador | Membro | Faturamento | Anônimo |
| ------------------------ | ------------- | ------ | ----------- | ------- |
| Atualizar organização    | ✅            | ❌     | ❌          | ❌      |
| Excluir organização      | ✅            | ❌     | ❌          | ❌      |
| Convidar membro          | ✅            | ❌     | ❌          | ❌      |
| Revogar convite          | ✅            | ❌     | ❌          | ❌      |
| Listar membros           | ✅            | ✅     | ✅          | ❌      |
| Transferir propriedade   | ⚠️            | ❌     | ❌          | ❌      |
| Atualizar função membro  | ✅            | ❌     | ❌          | ❌      |
| Excluir membro           | ✅            | ⚠️     | ❌          | ❌      |
| Listar projetos          | ✅            | ✅     | ✅          | ❌      |
| Criar novo projeto       | ✅            | ✅     | ❌          | ❌      |
| Atualizar projeto        | ✅            | ⚠️     | ❌          | ❌      |
| Excluir projeto          | ✅            | ⚠️     | ❌          | ❌      |
| Obter detalhes de faturamento | ✅        | ❌     | ✅          | ❌      |
| Exportar detalhes de faturamento | ✅     | ❌     | ✅          | ❌      |

> ✅ = permitido
> ❌ = não permitido
> ⚠️ = permitido com condições

#### Condições

- Somente proprietários podem transferir a propriedade da organização;
- Somente administradores e autores de projetos podem atualizar/excluir o projeto;
- Membros podem deixar sua própria organização;
