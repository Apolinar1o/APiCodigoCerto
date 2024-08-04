# Express API com MongoDB e JWT

## Descrição

Este projeto é uma API desenvolvida com **Express.js** e **MongoDB**, com autenticação segura utilizando **JSON Web Tokens (JWT)**. A API permite operações CRUD (Criar, Ler, Atualizar e Deletar) em tarefas e usuários, e está hospedada na **Vercel**.

## Funcionalidades

- **Criação de Usuários**: Registre novos usuários com validação de dados (email, senha e nome).
- **Login de Usuários**: Autentique usuários e obtenha um token JWT.
- **Gerenciamento de Tarefas**: Crie, atualize, liste e delete tarefas.
- **Autenticação e Autorização**: Utilize JWT para proteger rotas e garantir que apenas usuários autenticados possam acessar recursos específicos.

## Tecnologias Utilizadas

- **Express.js**: Framework para criar a API.
- **MongoDB**: Banco de dados NoSQL para armazenar usuários e tarefas.
- **JWT**: Autenticação e geração de tokens para segurança.
- **Vercel**: Hospedagem da aplicação na nuvem.
## URL da API

A API está disponível em [https://a-pi-codigo-certo.vercel.app/](https://a-pi-codigo-certo.vercel.app/). Todas as requisições para rotas protegidas devem incluir um token JWT no cabeçalho `Authorization`. O formato do cabeçalho deve ser:
## Rotas da API

### Usuários

- **POST /api/user**
  - **Descrição**: Registra um novo usuário.
  - **Body**: 
    ```json
    {
      "email": "user@example.com",
      "senha": "password",
      "nome": "User Name"
    }
    ```
  - **Resposta**: 
    ```json
    {
      "message": "Usuário criado com sucesso"
    }
    ```

- **POST /api/login**
  - **Descrição**: Autentica um usuário e retorna um token JWT.
  - **Body**: 
    ```json
    {
      "email": "user@example.com",
      "senha": "password"
    }
    ```
  - **Resposta**: 
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

### Tarefas

- **GET /api/func**
  - **Descrição**: Lista todas as tarefas.
  - **Resposta**: 
    ```json
    [
      {
        "_id": "task_id",
        "titulo": "Task Title",
        "descricao": "Task Description",
        "prazo": "YYYY-MM-DD"
      }
    ]
    ```

- **POST /api/func**
  - **Descrição**: Cria uma nova tarefa.
  - **Body**: 
    ```json
    {
      "titulo": "Task Title",
      "descricao": "Task Description",
      "prazo": "YYYY-MM-DD"
    }
    ```
  - **Resposta**: 
    ```json
    {
      "message": "Tarefa criada com sucesso"
    }
    ```

- **PUT /api/func/**
  - **Descrição**: Atualiza uma tarefa existente.
  - **Body**: 
    ```json
    {
      "taskId": "123123123123123"
      "titulo": "Updated Title",
      "desc": "Updated Description",
      "prazo": "YYYY-MM-DD"
    }
    ```
  - **Resposta**: 
    ```json
    {
      "message": "Tarefa atualizada com sucesso"
    }
    ```

- **DELETE /api/func**
  - **Descrição**: Deleta uma tarefa existente.
  - **Body**: 
    ```json
    {
      "taskId": "123123123123123"
    }
    ```
  - **Resposta**: 
    ```json
    {
      "message": "Tarefa deletada com sucesso"
    }
    ```

## Autenticação

Para acessar as rotas protegidas, você deve passar um token JWT válido no cabeçalho da requisição. Use o token retornado após o login para autenticar suas requisições.


