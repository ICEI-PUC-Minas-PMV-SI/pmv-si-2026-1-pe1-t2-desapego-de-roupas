# Programação de Funcionalidades

## Requisitos Atendidos

Pré-requisitos: [Especificação do Projeto](docs/especification.md).

### Requisitos Funcionais

**Tela de Cadastro (RF-01)**

Responsável: Bettina

O acesso à tela de cadastro pode ser realizado através da opção “Cadastrar” disponível na barra de navegação superior.

Exemplo da tela de cadastro:

<img src="https://cdn.discordapp.com/attachments/1481062934951100539/1508173437041115477/Captura_de_tela_2026-05-24_151954.png?ex=6a149377&is=6a1341f7&hm=dfe2cce6bb39971b197ba0f0a3921dc7c080d2ef7a51907916e8cc05d0986179&" alt="Tela de Cadastro">

### Requisito atendido

RF-01: O sistema deve permitir que o usuário faça o cadastro.

### Arquivos da implementação

`src/pages/signup.html`

### Instruções de acesso

Acesse a aplicação pelo navegador através da seguinte URL: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t2-desapego-de-roupas/src/pages/main.html

Em seguida, clique na opção “Cadastrar” na barra de navegação superior para acessar a tela de cadastro.


| ID     | Descrição do Requisito                                                                                       | Responsável | Artefato Criado                                                                                                  |
|--------|--------------------------------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------|
| RF-001 | A aplicação deve permitir que o usuário entre com email e senha previamente cadastrados                      | Clayton     | `src/pages/login.html`, `assets/js/controllers/login.js`, `assets/js/services/auth.js`, `assets/js/repository/users.js`, `assets/js/repository/session.js` |
| RF-002 | A aplicação deve indicar visualmente o usuário logado na header e permitir o logout via dropdown no avatar   | Clayton     | `src/pages/index.html`, `assets/js/controllers/header.js`, `assets/js/repository/session.js`                     |
| RF-003 | A aplicação deve permitir o cadastro de novos usuários informando nome, email e senha | Bettina | `src/pages/signup.html` |


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

