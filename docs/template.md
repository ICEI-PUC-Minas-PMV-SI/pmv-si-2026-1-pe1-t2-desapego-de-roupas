# Template Padrão do Site

Este documento define o **layout padrão** da aplicação *Desapego de Roupas* — a identidade visual, o esqueleto comum a todas as páginas, a responsividade e a iconografia.

A implementação em HTML e CSS está em [`src/assets/css/`](../src/assets/css/) e a página [`src/index.html`](../src/index.html) serve como referência de uso.

---

## Sumário

1. [Design](#design)
2. [Cores](#cores)
3. [Tipografia](#tipografia)
4. [Iconografia](#iconografia)
5. [Espaçamentos, bordas e sombras](#espaçamentos-bordas-e-sombras)
6. [Responsividade](#responsividade)
7. [Arquivos CSS](#arquivos-css)
8. [Boilerplate HTML](#boilerplate-html)

---

## Design

Toda página do site segue a mesma estrutura:

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (roxo)                                           │
│  [ busca ]   [ logo ]           Início  Cadastrar  (@)   │
├──────────────────────────────────────────────────────────┤
│  faixa decorativa (roxo claro)                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  MAIN — conteúdo da página dentro de .container          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER (roxo claro) — Copyright @ 2026 …                │
└──────────────────────────────────────────────────────────┘
```

**Logo**: o ícone de folha (representa sustentabilidade) fica centralizado no header, ao lado do campo de busca.

**Menu principal**: `Início`, `Cadastrar`, `Entrar` + avatar de perfil, alinhados à direita no header.

**Botões e formulários genéricos**: definidos em `components.css` (`.btn`, `.form`, `.form-control`, `.card`) e prontos pra uso em qualquer página.

> Componentes específicos de cada tela (tiles de categoria, cards de produto, card de autenticação etc.) serão construídos na **Etapa 3**, aproveitando as variáveis e classes base definidas aqui.

---

## Cores

Paleta monocromática baseada em variações de roxo. Todas estão em [`variables.css`](../src/assets/css/variables.css) e devem ser usadas via `var(--color-…)`.

### Paleta primária

| Token                    | Hex       | Uso                                         |
| ------------------------ | --------- | ------------------------------------------- |
| `--color-primary`        | `#7C6A95` | Botões, links, títulos, header              |
| `--color-primary-dark`   | `#5E4E78` | Hover/ativo de botões, ênfase em títulos    |
| `--color-primary-light`  | `#B8A9C9` | Faixas decorativas, bordas                  |
| `--color-primary-bg`     | `#E8E3EC` | Fundo de páginas de autenticação            |
| `--color-primary-bg-alt` | `#D6CFDD` | Footer                                      |

### Superfícies e texto

| Token                       | Hex       | Uso                              |
| --------------------------- | --------- | -------------------------------- |
| `--color-surface`           | `#FFFFFF` | Cards, inputs                    |
| `--color-background`        | `#FFFFFF` | Fundo padrão do body             |
| `--color-text`              | `#4A3D5C` | Texto padrão                     |
| `--color-text-muted`        | `#8A7BA8` | Texto secundário                 |
| `--color-text-on-primary`   | `#FFFFFF` | Texto sobre fundo roxo           |
| `--color-border`            | `#C9BDD6` | Bordas de inputs                 |

### Feedback

`--color-success` `#6B9E7A` · `--color-warning` `#D4A95A` · `--color-error` `#C75A5A` · `--color-info` `#6A8BB5`.

---

## Tipografia

| Família          | Uso                                                       |
| ---------------- | --------------------------------------------------------- |
| **Poppins**      | Principal — títulos, corpo, botões                        |
| **Roboto Mono**  | Rótulos de formulário e footer                            |

Carregadas via Google Fonts no `<head>`.

### Escala (base 16px)

| Token               | Tamanho  | Uso                              |
| ------------------- | -------- | -------------------------------- |
| `--font-size-xs`    | 12 px    | Legendas                         |
| `--font-size-sm`    | 14 px    | Texto secundário, footer         |
| `--font-size-base`  | 16 px    | Corpo padrão                     |
| `--font-size-lg`    | 18 px    | Destaques                        |
| `--font-size-xl`    | 20 px    | `h4`                             |
| `--font-size-2xl`   | 24 px    | `h3`                             |
| `--font-size-3xl`   | 32 px    | `h2`                             |
| `--font-size-4xl`   | 40 px    | `h1`                             |

Pesos disponíveis: 400, 500, 600, 700.

---

## Iconografia

**Font Awesome 6** (CDN) é a biblioteca padrão:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>
```

Ícones decorativos recebem `aria-hidden="true"`. Ícones interativos precisam de `aria-label`. Prefira `fa-solid`.

### Ícones usados no template

| Contexto          | Arquivo / Classe                    |
| ----------------- | ----------------------------------- |
| Logo (folha)      | `src/assets/icons/logo.png`         |
| Busca             | `fa-solid fa-magnifying-glass`      |
| Perfil / avatar   | `fa-solid fa-user`                  |

A **logo** é um PNG preto. No header roxo ela é exibida em branco via `filter: brightness(0) invert(1)` (veja `.header__brand-icon` em `layout.css`). Se precisar usá-la em fundo claro, remova o filter.

Ícones específicos de cada tela serão escolhidos na Etapa 3. Imagens/SVGs customizados ficam em `src/assets/icons/`.

---

## Espaçamentos, bordas e sombras

**Espaçamento** (escala 4px): `--space-1` (4) · `--space-2` (8) · `--space-3` (12) · `--space-4` (16) · `--space-5` (24) · `--space-6` (32) · `--space-7` (40) · `--space-8` (48) · `--space-10` (64) · `--space-12` (96).

**Raios**: `--radius-sm` (4) · `--radius-md` (8) · `--radius-lg` (12) · `--radius-xl` (16) · `--radius-full` (círculo).

**Sombras**: `--shadow-sm` (elevação sutil) · `--shadow-md` (cards) · `--shadow-lg` (modais) · `--shadow-focus` (anel de foco em inputs).

---

## Responsividade

Mobile-first, com três breakpoints:

| Largura          | Comportamento                                     |
| ---------------- | ------------------------------------------------- |
| ≤ 480 px         | Header quebra em duas linhas; grids viram 1 col   |
| ≤ 768 px         | Grids de 3/4 colunas reduzem para 2               |
| > 768 px         | Layout completo                                   |

O `.container` tem largura máxima de `1200px` com padding horizontal responsivo.

---

## Arquivos CSS

```
src/assets/css/
├── styles.css        Aggregator — único a ser importado nas páginas
├── reset.css         Normalização cross-browser
├── variables.css     Cores, fontes, espaçamentos (fonte da verdade)
├── base.css          Tipografia global e utilitários
├── layout.css        Page, container, header, footer, grid
└── components.css    Botões, formulários, cards, busca
```

Ordem do cascade em `styles.css`: reset → variables → base → layout → components.

Nunca edite o visual com CSS inline ou `<style>` local. Qualquer componente novo deve ser adicionado em `components.css`.

---

## Boilerplate HTML

Cópia pronta para iniciar uma nova página em `src/pages/`:

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

  <link rel="stylesheet" href="../assets/css/styles.css" />
</head>
<body>
  <div class="page">
    <!-- HEADER (copiar de src/index.html) -->

    <main class="page__main">
      <div class="container">
        <!-- conteúdo da página -->
      </div>
    </main>

    <!-- FOOTER (copiar de src/index.html) -->
  </div>
</body>
</html>
```

---
