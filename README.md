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

Clonando o repositório
```
$ git clone git@github.com:Lgabz/desafio-VUTTR-BossaBox.git

$ cd desafio-VUTTR-BossaBox
```
Instalando as dependências<br>
```
$ yarn
```
ou
```
$ npm install
```

Rodando a aplicação<br>

Com o banco de dados já criado e as dependências instaladas, agora você pode rodar o server da aplicação
```
$ yarn dev
```
ou
```
$ npm run dev
```

### Rotas

Essa é a URL base da aplicação: http://localhost:3000/

