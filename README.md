# ConcursoHub

Plataforma web para centralizar concursos públicos, organizar oportunidades e facilitar o acompanhamento de editais e prazos.

---

## 📘 Sobre o Projeto

O **ConcursoHub** é uma plataforma web desenvolvida para centralizar informações sobre concursos públicos, permitindo que candidatos encontrem oportunidades, filtrem editais e acompanhem prazos de forma simples e organizada.

O projeto foi pensado para resolver um problema real: a dificuldade de encontrar, comparar e acompanhar concursos públicos em um único lugar.

Hoje, quem busca concursos enfrenta:

- informações espalhadas
- editais longos e desorganizados
- dificuldade para acompanhar prazos
- dificuldade para comparar oportunidades

O ConcursoHub resolve isso com uma experiência simples, direta e funcional.

---

## 🎯 Objetivo

Criar uma plataforma web para:

- centralizar concursos públicos
- organizar oportunidades
- facilitar buscas e filtros
- acompanhar prazos
- destacar melhores oportunidades

---

## 🧩 O que o sistema faz

O ConcursoHub permite:

- listar concursos públicos
- buscar oportunidades
- filtrar concursos
- visualizar detalhes
- acompanhar prazos
- identificar melhores salários
- visualizar concursos com mais vagas
- acompanhar concursos em destaque

---

## 🚀 Funcionalidades do MVP

### 📄 Centralização de Concursos

- Listar concursos
- Buscar concursos por nome
- Filtrar por estado
- Filtrar por órgão
- Filtrar por área
- Filtrar por banca
- Filtrar por status
- Filtrar por escolaridade
- Visualizar detalhes do concurso

### 🔔 Acompanhamento de Oportunidades

- Ver concursos com inscrições abertas
- Ver concursos previstos
- Ver concursos próximos do prazo
- Ver melhores salários
- Ver concursos com mais vagas
- Ver últimos adicionados
- Ver últimos dias para inscrição

---

## 🏗️ Arquitetura

O projeto será desenvolvido como **monólito modular**, permitindo simplicidade no MVP e escalabilidade futura.

### Estrutura escolhida

- arquitetura simples
- separação por módulos
- fácil manutenção
- pronta para evolução futura

---

## ⚙️ Stack Tecnológica

### Backend

- Node.js
- NestJS
- TypeScript
- Prisma ORM

### Banco de Dados

- PostgreSQL
- Neon (free tier)

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/ui
- TanStack Query

### Infraestrutura

- Frontend: Vercel
- Backend: Cloudflare Workers
- Banco: Neon

### CI/CD

- GitHub Actions
- Vercel Deploy
- Cloudflare Deploy

---

## 📁 Estrutura do Projeto

    concurso-hub/
      backend/
      frontend/

---

## 📦 Estrutura Backend

    backend/src/
      modules/
        concursos/
          dto/
          entities/
          concursos.controller.ts
          concursos.service.ts
          concursos.module.ts

      database/
        prisma.service.ts
        prisma.module.ts

      app.module.ts
      main.ts

---

## 📦 Estrutura Frontend

    frontend/src/
      app/
      components/
      services/
      hooks/
      types/

---

## 🗄️ Modelagem Inicial

### Concurso

    id
    titulo
    orgao
    banca
    estado
    area
    cargo
    salario
    vagas
    nivel
    status
    dataPublicacao
    dataInscricaoInicio
    dataInscricaoFim
    linkEdital
    createdAt

---

## 🔌 Endpoints (MVP)

### Concursos

    GET /concursos
    GET /concursos/:id

### Filtros

    GET /concursos?estado=SP
    GET /concursos?area=TI
    GET /concursos?banca=FGV
    GET /concursos?status=aberto
    GET /concursos?nivel=superior

### Ordenação

    GET /concursos?sort=salario
    GET /concursos?sort=prazo
    GET /concursos?sort=vagas

### Destaques

    GET /concursos/destaques/melhores-salarios
    GET /concursos/destaques/mais-vagas
    GET /concursos/destaques/ultimos-adicionados
    GET /concursos/destaques/ultimos-dias

---

## 🖥️ Frontend

### Páginas

- Home
- Listagem de Concursos
- Detalhes do Concurso

### Componentes

- Header
- SearchBar
- FilterSidebar
- ConcursoCard
- HighlightSection
- SortDropdown
- Pagination
- Footer

---

## 🚀 Etapas de Implementação

### Fase 1 — Setup

- criar repositório
- configurar backend
- configurar frontend
- configurar banco
- configurar CI/CD

### Fase 2 — Backend Base

- criar módulo concursos
- modelar entidade
- migrations
- seed
- listagem
- detalhes

### Fase 3 — Filtros

- filtros por estado
- filtros por área
- filtros por banca
- filtros por status
- filtros por escolaridade

### Fase 4 — Ordenação e Destaques

- melhores salários
- mais vagas
- últimos adicionados
- últimos dias

### Fase 5 — Frontend Base

- layout
- home
- cards
- integração

### Fase 6 — Frontend Interativo

- filtros
- busca
- paginação
- loading states

### Fase 7 — Finalização

- responsividade
- README final
- deploy
- ajustes finais

---

## 🔄 CI/CD

O projeto será publicado continuamente.

Fluxo:

1. desenvolvimento local
2. push no GitHub
3. GitHub Actions executa
4. build
5. deploy automático
6. validação online

---

## 🎯 Objetivo Final

Entregar uma plataforma web funcional para:

- encontrar concursos públicos
- acompanhar oportunidades
- comparar editais
- visualizar prazos
- identificar melhores oportunidades

---

## 💼 Projeto de Portfólio

O ConcursoHub foi planejado como um projeto de portfólio com foco em:

- arquitetura moderna
- backend profissional
- frontend funcional
- deploy real
- CI/CD
- escalabilidade futura

---

## 📄 Licença

MIT License
