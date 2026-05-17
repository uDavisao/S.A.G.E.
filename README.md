# S.A.G.E. — Sistema Auxiliar de Gerenciamento de Estoque

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![Projeto](https://img.shields.io/badge/projeto-acad%C3%AAmico-blue)
![Front--End](https://img.shields.io/badge/front--end-HTML%20%7C%20CSS%20%7C%20JavaScript-yellow)
![Bootstrap](https://img.shields.io/badge/bootstrap-local-purple)

O **S.A.G.E.** é um sistema auxiliar de gerenciamento de estoque desenvolvido para facilitar o controle administrativo de peças, produtos e movimentações dentro de uma oficina.

O projeto foi criado com foco em organização, clareza visual e facilidade de uso, oferecendo uma interface moderna, responsiva e preparada para futura integração com back-end e banco de dados.

A proposta do sistema é centralizar informações importantes do estoque em um painel administrativo simples, intuitivo e funcional, permitindo visualizar indicadores, cadastrar peças, registrar entradas e saídas, acompanhar relatórios e configurar dados da empresa.

---

## Visão Geral

O S.A.G.E. foi desenvolvido como um projeto acadêmico com o objetivo de simular uma solução real para gerenciamento de estoque.

A aplicação foi estruturada em front-end puro, utilizando **HTML**, **CSS**, **JavaScript** e **Bootstrap local**, com separação de responsabilidades entre páginas, componentes, estilos e scripts.

O sistema foi preparado para que a equipe de back-end possa integrar posteriormente autenticação, banco de dados, cadastro real de produtos, controle de usuários, movimentações e relatórios dinâmicos.

---

## Funcionalidades

O sistema conta com as seguintes funcionalidades visuais e estruturais:

- Tela de login administrativa.
- Aba de recuperação de senha.
- Aba de contato com suporte.
- Dashboard com indicadores principais.
- Tela de estoque e produtos.
- Cadastro visual de novas peças.
- Tela de movimentações.
- Registro de entrada de estoque.
- Registro de saída de estoque.
- Tela de relatórios gerenciais.
- Gráficos visuais preparados para dados futuros.
- Tela de configurações do sistema.
- Alternância entre tema claro e escuro.
- Cadastro visual de dados da empresa.
- Cadastro visual de membros da equipe.
- Componentes reutilizáveis.
- Estrutura preparada para integração com back-end.

---

## Objetivo do Projeto

O principal objetivo do S.A.G.E. é oferecer uma interface administrativa clara e profissional para controle de estoque em oficinas.

A aplicação busca resolver problemas comuns de organização, como:

- Falta de controle sobre peças disponíveis.
- Dificuldade em identificar estoque baixo.
- Registro manual de entradas e saídas.
- Falta de visualização rápida sobre movimentações.
- Ausência de relatórios administrativos.
- Necessidade de centralizar dados da empresa e equipe.

Mesmo sendo um projeto acadêmico, a estrutura foi pensada para se aproximar de um sistema real, com organização de arquivos, padronização visual e preparação para crescimento futuro.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **HTML5** — estrutura das páginas.
- **CSS3** — estilização, responsividade, temas e componentes visuais.
- **JavaScript** — interações, modais, abas, tema e carregamento de componentes.
- **Bootstrap local** — base auxiliar de layout e utilidades.
- **SVG Icons** — ícones leves e integrados ao projeto.

---

## Estrutura do Projeto

A organização dos arquivos foi feita para facilitar manutenção, leitura e integração futura.

```txt
SAGE/
├── login.html
├── index.html
├── estoque.html
├── movimentacoes.html
├── relatorios.html
├── configuracoes.html
│
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── auth.css
│   │
│   ├── js/
│   │   ├── core/
│   │   │   ├── app.js
│   │   │   ├── api.js
│   │   │   └── utils.js
│   │   │
│   │   ├── components/
│   │   │   ├── sidebar.js
│   │   │   ├── topbar.js
│   │   │   ├── modal.js
│   │   │   ├── charts.js
│   │   │   ├── emptyState.js
│   │   │   └── icons.js
│   │   │
│   │   └── pages/
│   │       ├── login.js
│   │       ├── dashboard.js
│   │       ├── estoque.js
│   │       ├── movimentacoes.js
│   │       ├── relatorios.js
│   │       └── configuracoes.js
│   │
│   ├── vendor/
│   │   └── bootstrap/
│   │       ├── bootstrap.min.css
│   │       └── bootstrap.bundle.min.js
│   │
│   └── docs/
│       └── GUIA_BACKEND.txt
│
└── README.md
