# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                       | Responsável | Artefato Criado                                                                                                  |
|--------|--------------------------------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------|
| RF-001 | A aplicação deve permitir que o usuário entre com email e senha previamente cadastrados                      | Clayton     | `src/pages/login.html`, `assets/js/controllers/login.js`, `assets/js/services/auth.js`, `assets/js/repository/users.js`, `assets/js/repository/session.js` |
| RF-002 | A aplicação deve indicar visualmente o usuário logado na header e permitir o logout via dropdown no avatar   | Clayton     | `src/pages/index.html`, `assets/js/controllers/header.js`, `assets/js/repository/session.js`                     |

## Descrição das estruturas

A persistência é feita via `localStorage`. Cada "tabela" corresponde a uma chave.

### Usuário (chave `users`)

Array de objetos. Acessado por `assets/js/repository/users.js`.

| **Nome** | **Tipo**            | **Descrição**                                            | **Exemplo**                              |
|----------|---------------------|----------------------------------------------------------|------------------------------------------|
| id       | string (UUID v4)    | Identificador único, gerado por `generateUUID()`         | `"7b9c4d06-be0d-414a-9a06-14b25a865e75"` |
| login    | string              | Nome de usuário (username)                               | `"admin"`                                |
| email    | string              | Email do usuário (chave usada na tela de login)          | `"admin@abc.com"`                        |
| nome     | string              | Nome completo, exibido na header quando logado           | `"Administrador do Sistema"`             |
| senha    | string (texto puro) | Senha do usuário. **Sem hash** — limitação do escopo.    | `"123"`                                  |

### Sessão (chave `current_user`)

Objeto único (não array) com o mesmo formato do usuário. Representa quem está logado no momento. É criado por `repository/session.js → save(user)` no login bem-sucedido, e removido por `clear()` no logout.

| **Estado**             | **Conteúdo de `current_user`**           |
|------------------------|------------------------------------------|
| Usuário não logado     | `null` (chave não existe no localStorage) |
| Usuário logado         | Objeto completo do usuário                |

