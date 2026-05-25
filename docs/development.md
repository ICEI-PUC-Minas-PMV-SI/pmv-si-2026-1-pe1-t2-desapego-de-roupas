# Programação de Funcionalidades

## Requisitos Atendidos

Pré-requisitos: [Especificação do Projeto](docs/especification.md).

## Requisitos Funcionais

### Tela de Cadastro (RF-01)

Responsável: Bettina

**Exemplo da tela de cadastro:**

<img src="https://cdn.discordapp.com/attachments/1481062934951100539/1508173437041115477/Captura_de_tela_2026-05-24_151954.png?ex=6a149377&is=6a1341f7&hm=dfe2cce6bb39971b197ba0f0a3921dc7c080d2ef7a51907916e8cc05d0986179&" alt="Tela de Cadastro">

### Requisito atendido

RF-01: O sistema deve permitir que o usuário faça o cadastro.

### Arquivos da implementação

`src/pages/signup.html`

`src/pages/index.html`

### Instruções de acesso

Acesse a aplicação pelo navegador através da seguinte URL: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t2-desapego-de-roupas/src/pages/main.html

Em seguida, clique na opção “Cadastrar” na barra de navegação superior para acessar a tela de cadastro.

---

### Tela de Login (RF-02)

Responsável: Clayton

**Exemplo da tela de login:**

<img src="https://cdn.discordapp.com/attachments/1481062934951100539/1508179945417867435/Captura_de_tela_2026-05-24_154851.png?ex=6a149987&is=6a134807&hm=cd69c8912fccbef0b6aba5c8573fa57b7d7b6efb26fdc66685bd6ae116269707&" alt="Tela de Login">

### Requisito atendido

RF-02: O sistema deve permitir ao usuário conseguir fazer login e logout.

### Arquivos da implementação

`src/pages/login.html`

`assets/js/controllers/login.js`

`assets/js/services/auth.js`

`assets/js/repository/session.js`

`src/pages/index.html`
 
`assets/js/controllers/header.js`
 
`assets/js/repository/session.js`

### Instruções de acesso

Acesse a aplicação pelo navegador através da seguinte URL: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t2-desapego-de-roupas/src/pages/main.html

Em seguida, clique em “Entrar” na barra de navegação superior para acessar a tela de login.

Para realizar o logout, clique no avatar do usuário no canto superior da tela e selecione a opção “Sair”.

---

### Tela de Cadastro de Vendedores

Responsável: Amadeu 

**Exemplo da tela de cadastro de vendedor:**

<img src="https://media.discordapp.net/attachments/1481062934951100539/1508210696536457348/Captura_de_tela_2026-05-24_174953.png?ex=6a14b62b&is=6a1364ab&hm=4ff3575c65e06abf054bc2a2148ac3b1995993aee2bfdf8472c3f0cf447e0863&=&format=webp&quality=lossless&width=786&height=369" alt="Tela de Cadastro de Vendedores">

### Requisito atendido

RF-03: O sistema deve permitir ao usuário publicar uma roupa para desapego.

### Arquivos da implementação

`src/pages/seller-signup.html`

`src/assets/js/controllers/seller.js`

`src/assets/js/services/seller.js`

### Instruções de acesso

Acesse a aplicação pelo navegador através da seguinte URL: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t2-desapego-de-roupas/src/pages/main.html

Em seguida, realize login no sistema para ter acesso ao perfil.

Acesse a opção de começar a vender disponível na área do perfil do usuário.

---

### Tela de Cadastro de Roupas

Responsável: João

**Exemplo da tela de cadastro de roupas:**

<img src="https://cdn.discordapp.com/attachments/1481062934951100539/1508210697069395988/Captura_de_tela_2026-05-24_175106.png?ex=6a14b62b&is=6a1364ab&hm=d6b3878dcd4610d94e08bcaa77e10fa5562a1b2c83deb00800575bd2faa23ccb&" alt="Tela de Cadastro de Roupas">

### Requisitos atendidos

RF-03: O sistema deve permitir ao usuário publicar uma roupa para desapego.  
RF-05: O sistema deve permitir ao usuário inserir informações adicionais (tamanho, cor e descrição).

### Arquivos da implementação

`src/assets/js/controllers/cadastro-roupas.js`

`src/assets/js/repository/cadastro-roupas.js`

`src/assets/js/services/cadastro-roupas.js`

`src/pages/cadastro-roupas.html`

### Instruções de acesso

Acesse a aplicação pelo navegador através da seguinte URL: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t2-desapego-de-roupas/src/pages/main.html

Em seguida, realize login no sistema.

Para realizar o cadastro de vendedor, clique no avatar do usuário e selecione a opção começar a vender.

Para cadastrar uma roupa, utilize a opção “Cadastrar roupa” disponível no menu superior.

---

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

