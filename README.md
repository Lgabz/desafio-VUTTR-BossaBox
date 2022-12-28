# desafio-VUTTR-BossaBox

**Disclaimer: <br>**
>Essa aplicação é uma prática feita com o propósito de testar meus conhecimentos baseada no [desafio](https://www.notion.so/Back-end-0b2c45f1a00e4a849eefe3b1d57f23c6) proposto pela empresa BossaBox encontrado [nessa lista de desafios para Back-End](https://github.com/CollabCodeTech/backend-challenges).

## Descrição do projeto
![](https://img.shields.io/badge/Status-Concluído-green)<br>
Essa é uma RESTful API construída com NodeJS + Express + PostgreSQL. O Banco de dados foi populado por mim a fim de dar um contexto para os testes unitários. <br>
_Você pode popular o banco de dados através das features de **cadastro de usuários** e **cadastro de ferramentas**._

A proposta inicial da aplicação era um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags, composta das seguintes features:
+ Listar todas as ferramentas
+ Filtrar ferramentas pela tag
+ Cadastrar nova ferramenta
+ Remover ferramenta por ID

Tomei a liberdade de acrescentar algumas features, como:
+ Cadastro de usuários
+ Login do usuário
+ Filtro de autenticação de usuários
+ Busca de usuário pelo ID
+ Alterar dados do usuário
+ Buscar ferramentas pelo ID do usuário

## Contatos
Caso queira entrar em contato comigo você pode mandar me encontrar aqui:
+ E-mail: gabrielluizsouzavieira@gmail.com
+ LinkedIn: https://www.linkedin.com/in/gabrielluiz000/<br>
+ Discord: Gabriel Luiz#6182

![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

## Rodando a aplicação

### Pré-requisitos

- Para rodar a aplicação no seu dispositivo, você precisa de um ambiente com o NodeJs na versão 16 ou superior instalado, PostgreSQL (porta padrão) e uma plataforma para o teste das requisições, como Postman ou Insomnia. <br>
- O banco de dados utilizado foi o PostgreSQL. Para criar o banco de dados, você pode usar as queries armazenadas no diretório `./src/schema.sql` da aplicação como modelo.<br>

_Após clonar o repositório:_
- Você também deve criar um arquivo `.env` e informar as variáveis de ambiente como é sugerido no diretório `.env.example` para que a API consiga se conectar corretamente ao banco de dados.

### Instalando a aplicação

**Clonando o repositório**
```
$ git clone git@github.com:Lgabz/desafio-VUTTR-BossaBox.git

$ cd desafio-VUTTR-BossaBox
```
**Instalando as dependências**<br>
```
$ yarn
```
ou
```
$ npm install
```

**Rodando o server da aplicação**<br>

Com o banco de dados já criado e as dependências instaladas, agora você pode rodar o server da aplicação
```
$ yarn dev
```
ou
```
$ npm run dev
```

## Rotas

Essa é a URL base da aplicação: http://localhost:3000/

### Cadastro de usuário

- É nessa rota que o usuário deve fazer o seu cadastro.

URL: http://localhost:3000/userSignIn

| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/userSignIn|POST| Content:  JSON-Type<br><br> {<br>"name": "user_name",<br> "email": "user_email",<br>"password": "user_password" <br>} | x | HTTP Status Code: 200<br><br>Mensagem retornada:<br>"Cadastro concluído com sucesso!" | HTTP Status Code: 400<br><br>Mensagem retornada:<br><descrição do erro>|

### Login do usuário

URL: http://localhost:3000/userLogin

| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/userLogin|POST| Content:  JSON-Type<br><br> {<br>"email": "user_email",<br>"password": "user_password" <br>} | x | HTTP Status Code: 200<br><br> Content:  JSON-Type<br><br>{<br>	"id": user_id,<br>"user": "user_name",<br>"token": "Token de autenticação"<br>}| HTTP Status Code: 400<br><br>Mensagem retornada:<br><descrição do erro>|

### Atenção!
```
A partir desse ponto todas as rotas devem receber o Token de Autenticação em seu cabeçalho.
```

### Busca por usuário
- Nessa rota é possível fazer uma busca por usuários através do seu ID.

URL: http://localhost:3000/getUser/:id
> EX: http://localhost:3000/getUser/3

| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/getUser/:id|GET| x | id | HTTP Status Code: 200<br><br> Content:  JSON-Type<br><br>{<br>	"id": user_id,<br>"name": "user_name",<br>"email": "user_email"<br>}| HTTP Status Code: 400<br><br>Mensagem retornada: <descrição do erro>|

### Atualizar usuário
- Nessa rota é possível atualizar parcialmente os dados do usuário.

URL: http://localhost:3000/userUpdate
| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/userUpdate|PATCH| Content:  JSON-Type<br><br> {<br>"name": "new_user_name",<br> "email": "new_user_email",<br>"password": "new_user_password" <br>} | x | HTTP Status Code: 200<br><br>Mensagem retornada:<br>"Usuário atualizado com sucesso!" | HTTP Status Code: 400<br><br>Mensagem retornada:<br><descrição do erro>|

### Cadastro de ferramenta

- Aqui o usuário pode criar uma nova ferramenta informando o título, o link, uma descrição e as tags de identificação.

URL: http://localhost:3000/tools
| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/tools|POST| Content:  JSON-Type<br><br> {<br>"title": "tool_title",<br>"link": "tool_link",<br>"description": "tool_description",<br>"tags": ["tool_tags_array"]<br>} | x | HTTP Status Code: 200<br><br>Content:  JSON-Type<br><br> {<br>"title": "tool_title",<br>"link": "tool_link",<br>"description": "tool_description",<br>"tags": ["tool_tags_array"],<br>"tool_creator": {<br>"name": "tool_creator_name",<br>"id": tool_creator_id }<br>} | HTTP Status Code: 400<br><br>Mensagem retornada:<br><descrição do erro>|

### Buscar todas as ferramentas
- Nessa rota, todas as ferramentas cadastradas são retornadas.

URL:http://localhost:3000/tools
| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/tools/:id|GET| x | x | HTTP Status Code: 200<br><br> Content:  JSON-Type<br><br>{<br>"id":tool_id,<br>"title": "tool_title",<br>"link": "tool_link",<br>"description": "tool_description",<br>"tags": ["tool_tags_array"],<br>"tool_creator": tool_creator_id<br>}| HTTP Status Code: 400<br><br>Mensagem retornada: <descrição do erro>|

### Buscar ferramenta por tags
URL: http://localhost:3000/tools/search
> EX: http://localhost:3000/tools/search?tag=node

URL:http://localhost:3000/tools
| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/tools/search|GET| x | tags=tag_name | HTTP Status Code: 200<br><br> Content:  JSON-Type<br><br>{<br>"id":tool_id,<br>"title": "tool_title",<br>"link": "tool_link",<br>"description": "tool_description",<br>"tags": ["tool_tags_array"],<br>"tool_creator": tool_creator_id<br>}| HTTP Status Code: 400<br><br>Mensagem retornada: <descrição do erro>|

### Deletar ferramenta
- Nessa rota, é possível deletar uma ferramenta através do seu ID.

URL: http://localhost:3000/tools/:id
> EX: http://localhost:3000/tools/5

| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/tools/:id|DELETE| x | id | HTTP Status Code: 200<br><br> Mensagem retornada:<br>"Ferramenta excluída."| HTTP Status Code: 400<br><br>Mensagem retornada: <descrição do erro>|

### Buscar ferramenta através do ID do usuário

URL: http://localhost:3000/tools/:id
> EX: http://localhost:3000/tools/3

| ENDPOINT | Method | Body Params | URL Params | Success Response | Error Response |
|----------|--------|-------------|------------|------------------|----------------|
|/tools/:id|GET| x | id | HTTP Status Code: 200<br><br> Content:  JSON-Type<br><br>{<br>"id":tool_id,<br>"title": "tool_title",<br>"link": "tool_link",<br>"description": "tool_description",<br>"tags": ["tool_tags_array"],<br>"tool_creator": tool_creator_id<br>}| HTTP Status Code: 400<br><br>Mensagem retornada: <descrição do erro>|

