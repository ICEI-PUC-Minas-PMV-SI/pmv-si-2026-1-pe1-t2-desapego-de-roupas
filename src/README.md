# Código-fonte — Desapego de Roupas

Este diretório contém o código-fonte da aplicação web Desapego de Roupas.

---

## Estrutura de pastas

```
src/
├── index.html              Página de referência para uso do template
├── pages/                  Páginas do site (login, cadastro, perfil, categorias…)
└── assets/
    ├── css/
    │   ├── styles.css      Estilização do projeto
    │   ├── reset.css       Normalização dos navegadores
    │   ├── variables.css   Design (cores, tipografia, espaçamentos)
    │   ├── base.css        Tipografia global e utilitários
    │   ├── layout.css      Estruturas (header, sidebar, footer, grid, container)
    │   └── components.css  Componentes reutilizáveis (botões, inputs, cards…)
    ├── img/                Imagens do projeto (logo, fotos, placeholders)
    └── icons/              Ícones (quando não usar Font Awesome)
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

  <!-- Caminho relativo a partir de src/pages/ -->
  <link rel="stylesheet" href="../assets/css/styles.css" />
</head>
<body>
  <div class="page">
    <!-- Cole aqui o header (ver src/index.html) -->

    <main class="page__main">
      <!-- Conteúdo da página -->
    </main>

    <!-- Cole aqui o footer (ver src/index.html) -->
  </div>
</body>
</html>
```

---

## Convenções de código

- **HTML semântico**: use `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
- **Acessibilidade**: todo ícone decorativo recebe `aria-hidden="true"`; todo input recebe `<label>` associado (use `u-sr-only` para labels visualmente ocultos).
- **Classes CSS**: padrão **BEM leve** — `.bloco__elemento--modificador` (ex.: `.card__title`, `.btn--primary`).
- **Idioma**: conteúdo em pt-BR; classes e nomes de arquivos em inglês/pt-BR coerente com o padrão existente.
- **Nomes de arquivos**: minúsculos, com hífens (`cadastro-de-roupas.html`).
- **Nunca edite** diretamente os arquivos em `assets/css/` para resolver um caso de página específica. Se precisar de um novo componente, adicione-o em `components.css` seguindo o padrão BEM.

---

## Testando localmente

Como é um site estático, qualquer servidor HTTP local funciona. Opções:

```bash
# VS Code: extensão "Live Server" — clique botão direito em index.html → "Open with Live Server"
```

Acesse `http://localhost:8080`.

---
