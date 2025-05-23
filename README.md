![banner](https://github.com/user-attachments/assets/f0f99488-2adf-40f3-a077-0cf2b097fd1c)

Rocket Store é uma aplicação web de e-commerce moderna e responsiva, construída com React e TypeScript. Oferece uma experiência de compra fluida, com foco em performance, acessibilidade e design intuitivo. O projeto demonstra boas práticas em UI/UX, gerenciamento de estado, tratamento de erros e feedback ao usuário.

---

<br>

## 🛠️ Tecnologias Utilizadas

- **React** (19.1.0)
- **TypeScript** (5.8.3)
- **Vite** (6.3.5)
- **styled-components** (6.1.18)
- **@phosphor-icons/react** (2.1.8)
- **Axios** (1.9.0)
- **pnpm** (10.11.0)

## ✨ Funcionalidades

- **Catálogo de Produtos:**
  - Navegação por produtos agrupados por categoria em carrosséis responsivos.
  - Páginas detalhadas de produtos com imagens, descrições e preços.
  - Skeleton loaders para estados de carregamento suaves.

- **Carrinho de Compras:**
  - Adição, remoção e atualização de produtos no carrinho.
  - Modal do carrinho com lista de produtos rolável e barras de rolagem estilizadas.
  - Design responsivo para desktop e mobile.

- **Gestão de Pedidos:**
  - Visualização de pedidos anteriores com detalhes dos produtos e datas.
  - Rolagem interna para listas grandes de pedidos.

- **Feedback ao Usuário:**
  - Toasts de notificação para ações no carrinho e compras.
  - Estados de erro amigáveis com imagens e opção de tentar novamente.
  - Todas as telas de feedback e erro são responsivas e acessíveis.

- **Performance & UX:**
  - Otimização de carregamento e cache de imagens.
  - Tema centralizado e estilização consistente.
  - Todos os elementos visuais alinhados e adaptados para dispositivos móveis.

## 📁 Estrutura do Projeto

```
rocket-store/
├── src/
│   ├── components/         # Componentes reutilizáveis de UI (ProductCard, CartModal, Toasts, etc.)
│   ├── pages/              # Páginas principais (Home, ProductDetails, Pedidos)
│   ├── hooks/              # Hooks customizados do React
│   ├── services/           # Serviços de API e storage local
│   ├── styles/             # Tema e estilos globais
│   ├── @types/             # Tipagens TypeScript
│   └── App.tsx             # Componente principal da aplicação
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.ts
```

## 🚀 Como Rodar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (recomendado v16 ou superior)
- [pnpm](https://pnpm.io/) (recomendado v8 ou superior)

### Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/rocket-store.git
   cd Rocket-Store
   ```

2. **Instale as dependências com pnpm:**
   ```sh
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   pnpm dev
   ```
   O app estará disponível em [http://localhost:5173](http://localhost:5173) (ou conforme indicado no terminal).

## 📦 Scripts

- `pnpm dev` — Inicia o servidor de desenvolvimento
- `pnpm build` — Gera o build de produção
- `pnpm preview` — Visualiza o build de produção

---

Feito com 💜 para a Rocket Lab.
