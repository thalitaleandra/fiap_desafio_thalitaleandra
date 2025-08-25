# FIAP DESAFIO TÉCNICO

📋 **Índice**  
- [🎯 Sobre o Projeto](#-sobre-o-projeto)  
- [⚡ Funcionalidades](#-funcionalidades)  
- [🛠️ Stack Tecnológica](#-stack-tecnológica)  
- [🏗️ Arquitetura Limpa](#-arquitetura-limpa)  
- [🌐 Compatibilidade de Navegadores](#-compatibilidade-de-navegadores)  
- [📱 Design Responsivo](#-design-responsivo)  
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)  
- [📦 Pré-requisitos](#-pré-requisitos)  
- [⚙️ Instalação com Yarn](#-instalação-com-yarn)  
- [🚀 Como Executar](#-como-executar)  

---

## 🎯 Sobre o Projeto
O DESAFIO TÉCNICO é uma landing page moderna desenvolvida como desafio técnico, apresentando uma interface elegante e responsiva para cursos e imersões tecnológicas da FIAP.  
O projeto demonstra proficiência em tecnologias front-end modernas, implementação de componentes reutilizáveis e aplicação de princípios de **Clean Architecture**.

**Objetivos atingidos:**
- ✅ Interface moderna e intuitiva  
- ✅ Design responsivo para todos os dispositivos  
- ✅ Animações e micro-interações fluidas  
- ✅ Componentização clara e reutilizável  
- ✅ TypeScript para type safety  
- ✅ Boas práticas de desenvolvimento  

---

## ⚡ Funcionalidades
- Navbar dinâmica  
- Seções de cursos (Courses), FAQ e Intro  
- Accordion para mobile  
- Transições suaves de conteúdo  
- Dark mode compatível  
- Tipografia Gotham HTF  

---

## 🛠️ Stack Tecnológica
- **Front-end:** React.js, Next.js, TypeScript  
- **Estilos:** SCSS, CSS Modules  
- **Fontes:** Gotham HTF (woff/woff2)  
- **Ferramentas:** Yarn, VSCode  

---

## 🏗️ Arquitetura Limpa
O projeto segue **componentização** e separação por tipo de recurso:  
- **Components:** Courses, FAQ, Header, Intro, Nav, Bar, etc.  
- **Hooks:** Reutilizáveis para lógica de estado e interações  
- **Styles:** SCSS modulares e variáveis globais  
- **Types:** Tipagens TypeScript para segurança de dados  
- **Data:** Arquivos estáticos de cursos, FAQs e conteúdo  

---

## 🌐 Compatibilidade de Navegadores
- Chrome  
- Firefox  
- Edge  
- Safari  

---

## 📱 Design Responsivo
- Mobile, tablet e desktop  
- Accordion exclusivo para mobile  
- Fontes e espaçamentos ajustados por breakpoint  

## 📁 Estrutura do Projeto
src/
├─ app/
│ ├─ components/ # Courses, FAQ, Header, Intro, Nav, Bar...
│ ├─ hooks/ # Hooks reutilizáveis
│ ├─ styles/ # SCSS, globals, variables
│ ├─ types/ # Tipagens TypeScript
│ └─ data/ # Conteúdo estático (cursos, FAQ)


---

## 📦 Pré-requisitos
- Node.js >= 18  
- Yarn >= 1.22  

---

## ⚙️ Instalação com Yarn
```bash
# Clonar o repositório
git clone git@github.com:thalitaleandra/fiap_desafio_thalitaleandra.git

# Acessar a pasta do projeto
cd fiap_desafio_thalitaleandra

# Instalar dependências
yarn install

🚀 Como Executar
# Iniciar servidor de desenvolvimento
yarn dev

# O projeto estará disponível em:
# http://localhost:3000

⚡ Performance & Otimizações

Lazy loading de imagens

SCSS modular para CSS enxuto

Tipagem com TypeScript

Variáveis SCSS para cores, fontes e espaçamentos


## 📁 Estrutura do Projeto
