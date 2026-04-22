# 🌊 Pessoas Voluntárias para Enchentes no Brasil

## 📌 Sobre o Projeto

Esta API foi desenvolvida com o objetivo de auxiliar na organização de pessoas voluntárias em situações de enchentes no Brasil.

A aplicação permite cadastrar, consultar, atualizar e remover voluntários, facilitando a gestão de ajuda humanitária em momentos de crise.

## ❗Problema

Enchentes no Brasil frequentemente causam desorganização na distribuição de ajuda, dificultando o contato com voluntários disponíveis.

## ✅ Solução

Esta API centraliza o cadastro de voluntários, permitindo:

- Organização por tipo de ajuda
- Filtragem por disponibilidade
- Consulta rápida por cidade/estado

## 🚀 Tecnologias Utilizadas

<p align="left">
    <img
        height="65"
        src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png"
        title="Express"
    />
    <img
        height="65"
        src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png"
        title="Nodejs"
    />
    <img
        height="65"
        src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png"
        title="Postman"
    />
    <img
        height="65"
        src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png"
        title="SQLite/SQLite3"
    />
</p>

## ▶️ Como Rodar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1. **Clone esse repositório:**

   ```
   git clone https://github.com/jonatasoliveiradasilva/desafio-final-formacao-empower

   cd desafio-final-formacao-empower
2. **Instale as dependências:**

   ```
   npm install
3. **Inicie o servidor de desenvolvimento:**

   ```
   npm run dev   
**Acesse a aplicação no navegador:** http://localhost:3000/

## 🗄️ Banco de Dados

O banco de dados é criado automaticamente ao inicar o projeto

```
database.db
```

## 📋 Estrutura da Tabela (voluntários)

| Campo            | Descrição                                        |
| ---------------- | ------------------------------------------------ |
| id               | Idenficador Único                                |
| nome             | Nome da Pessoa Voluntária                        |
| idade            | Idade                                            |
| genero           | Feminino ou Masculino                            |
| email            | E-mail                                           |
| telefone         | Telefone (Celular)                               |
| cidade           | Cidade                                           |
| estado           | Estado                                           |
| tipo_ajuda       | Alimentos, Limpeza e Resgate                     |
| disponibilidade  | Manhã, Tarde, Período Integral e Final de Semana |

## 🔗 Endpoints

### 📍 Rota inicial

```
GET /
```
Retorna uma página HTML com informações da API

### 📄 Listar voluntários

```
GET /voluntarios
```

### 🔍 Buscar voluntário (id)

```
GET /voluntarios/:id
```

Ex: <code>/voluntarios/1</code>

### ➕ Adicionar voluntário

```
POST /voluntarios
```

### ✏️ Atualizar voluntário

```
PUT /voluntarios/:id
```

### ❌ Excluir voluntário

```
DELETE /voluntarios/:id
```

## 🔐 Segurança

A API utiliza queries parametrizadas para evitar SQL Injection:

```
WHERE id = ?
```

## 📚 Conceitos Aplicados

- API RESTful
- Banco de Dados Relacional (SQLite)
- CRUD (Create, Read, Update, Delete)
- Métodos HTTP (GET, POST, PUT, DELETE)

## 🎯 Objetivo do Projeto
- Este projeto foi desenvolvido com foco em aprendizado de Back End utilizando Node.js e boas práticas no desenvolvimento de APIs.
