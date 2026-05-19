# Código-fonte — Desapego de Roupas

Este diretório contém o código-fonte da aplicação web Desapego de Roupas.

---

## Estrutura de pastas

```
src/
├── pages/
│   ├── main.html               Página inicial
│   ├── login.html              Tela de entrada (autenticação)
│   ├── cadastro.html           Cadastro de usuários (TODO)
│   └── perfil.html             Perfil do usuário (TODO)
└── assets/
    ├── css/
    │   ├── styles.css          Agregador — único importado pelas páginas
    │   ├── reset.css           Normalização cross-browser
    │   ├── variables.css       Design tokens (cores, fontes, espaçamentos)
    │   ├── base.css            Tipografia global e utilitários
    │   ├── layout.css          Page, container, header, footer, grid
    │   └── components.css      Botões, inputs, cards, user-menu…
    ├── js/
    │   ├── seed.js             Popula o localStorage com dados iniciais
    │   ├── controllers/        Liga DOM aos services (um arquivo por tela)
    │   │   ├── login.js
    │   │   └── header.js
    │   ├── services/           Regras de negócio (sem DOM)
    │   │   └── auth.js
    │   ├── repository/         Acesso ao "banco" (localStorage)
    │   │   ├── users.js
    │   │   └── session.js
    │   └── utils/              Helpers genéricos
    │       └── utils.js
    ├── img/                    Imagens do projeto
    └── icons/                  Ícones (logo)
```

> **Documentação completa do template e design system:** [`docs/template.md`](../docs/template.md)

---

## Como criar uma nova página

1. **Crie o arquivo** dentro de `src/pages/` usando nomes em minúsculas e hífens (`login.html`, `cadastro-roupas.html`).
2. **Copie o boilerplate** abaixo (também disponível em `docs/template.md`).
3. **Importe apenas `styles.css`** — ele já carrega todos os demais CSS na ordem correta.
4. Use as classes já definidas em `layout.css` e `components.css`. **Não adicione CSS inline** nem crie novos arquivos CSS por página.

### Boilerplate HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nome da página — Desapego de Roupas</title>

  <link rel="icon" type="image/png" href="../assets/icons/logo.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  />

  <link rel="stylesheet" href="../assets/css/styles.css" />
</head>
<body>
  <div class="page">

    <main class="page__main">

    </main>

  </div>
</body>
</html>
```

---

## Arquitetura JavaScript

Sem framework, sem build — só **ES Modules** nativos do navegador. A lógica é dividida em 3 camadas, com chamadas sempre apontando pra dentro:

```
controllers  →  services  →  repository
   (DOM)        (regras)      (localStorage)
```

| Camada | Local | Responsabilidade | Pode usar | NÃO pode usar |
|---|---|---|---|---|
| **controllers** | `assets/js/controllers/` | Ouvir eventos, ler/atualizar DOM, redirecionar | `document`, `window`, services | localStorage direto, regras de negócio |
| **services** | `assets/js/services/` | Validar, autenticar, orquestrar | repositories | DOM, `document` |
| **repository** | `assets/js/repository/` | Ler/escrever no localStorage | `localStorage`, `JSON` | DOM, regras de negócio |

**Regra de ouro:** controller chama service, service chama repository — nunca o contrário. Service não toca em DOM. Repository não tem regra de negócio.

### Persistência

`localStorage` faz papel de banco. Cada "tabela" é uma chave:

| Chave           | Conteúdo                              | Acesso via             |
|-----------------|---------------------------------------|------------------------|
| `users`         | Array de usuários cadastrados         | `repository/users.js`  |
| `current_user`  | Objeto do usuário logado no momento   | `repository/session.js`|

### Seed

`seed.js` popula o localStorage com dados de teste **na primeira carga** (quando a chave `users` está null). Importado pelos controllers que precisam de dados, e respeita o estado existente — não sobrescreve usuários cadastrados pelo fluxo real.

---

## Convenções de código

### HTML

- Semântico: use `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
- Acessibilidade: todo ícone decorativo recebe `aria-hidden="true"`; todo input recebe `<label>` associado (use `u-sr-only` para labels visualmente ocultos).
- Conteúdo em pt-BR.

### CSS

- Padrão **BEM leve**: `.bloco__elemento--modificador` (ex.: `.card__title`, `.btn--primary`, `.page--auth`).
- **Nunca edite** o visual com CSS inline ou `<style>` na página. Se precisar de um novo componente, adicione em `components.css` seguindo BEM.
- Páginas de autenticação (login, cadastro) usam o modificador `.page--auth` (fundo lavender, sem header).

### JavaScript

- ES Modules: `import { x } from "./caminho/arquivo.js";` — sempre **com a extensão `.js`** (exigência do navegador).
- Cada controller é carregado via `<script type="module">` no fim do `<body>` da página.
- Nomeação: arquivos minúsculos com hífens se compostos. Funções em camelCase (`findByEmail`, `seedIfEmpty`).
- Centralizar acesso ao localStorage no repository — controllers e services nunca chamam `localStorage.*` diretamente.

### Nomes de arquivos

Minúsculos, com hífens quando compostos: `login.html`, `cadastro-roupas.html`, `users.js`, `session.js`.

---

## Testando localmente

Como é um site estático, qualquer servidor HTTP local funciona. **Não abra direto com duplo-clique** (`file://`) — ES Modules não rodam por restrição de CORS.

Opções:

```
# VS Code: extensão "Live Server" — botão direito em login.html → "Open with Live Server"
# Python (alternativa): python -m http.server 8080 a partir da raiz do projeto
```

A URL fica algo como `http://127.0.0.1:5500/src/pages/login.html`.

### Usuário de teste (do seed)

| Email             | Senha | Nome                       |
|-------------------|-------|----------------------------|
| `admin@abc.com`   | `123` | Administrador do Sistema   |

Pra resetar o "banco" durante testes: DevTools → Application → Local Storage → botão direito → Clear.

---
