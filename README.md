# Ant Design 5 + React | NodeJS

## Sobre o projeto
- App realiza pesquisa pelo nome ou parte do nome do personagem.
- Marca um personagem como favorito.
- Desmarca um personagem como favorito.
- Lista todos os personagens marcados como favorito.

## Tecnologias utilizadas no Front-end

- Ant Design 5
- React
- Yarn
- Vite
- TypeScript
- HTML
- CSS

## Tecnologias utilizadas no Back-end

- NodeJS
- Express
- MySQL

## Ferramentas utilizadas

- Visual Studio Code
- MySQL Workbench
- Postman
- Git

## CI/CD

- Front-end no Vercel.com
- Back-end no Railway.app

## Instruções

```bash
# Criar Base de Dados MySQL/MariaDB
CREATE DATABASE swapinodejs;
```

## Como executar o projeto Back-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/antd-reactnode-swapi.git

# entrar na pasta do projeto backend
cd backend

# alterar o arquivo .env de acordo com sua conexão MySQL/MariaDB
CONNECTION_STRING=mysql://user:password@server:port/swapinodejs

# baixar os pacotes do projeto
npm install

# executar o projeto
nodemon server.js

# URL/Porta do projeto backend em execução
http://localhost:8000/

# recurso para baixar base de dados dos nomes dos personagens da API SWAPI
http://localhost:8000/seeding
```

## Como executar o projeto Front-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/antd-reactnode-swapi.git

# entrar na pasta do projeto frontend
cd frontend

# baixar os pacotes do projeto
npm install

# executar o projeto
yarn vite

# URL/Porta do projeto frontend em execução
http://localhost:3000/
```

## Recursos

```bash
# baixar base de dados dos nomes dos personagens
/seeding

# buscar todos os personagens
/people

# buscar todos os personagens por nome ou parte do nome
/people/:name

# buscar todos os personagens marcados como favorito
/people/favorite/:favorite

# marcar personagem como favorito
/people/:id/favorite/:favorite

```

## Autor

Renato Henrique Vasconcelos

https://www.linkedin.com/in/renatohvo/

## 

<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="100" heigth="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="80" heigth="80" />
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="80" height="80"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" width="80" heigth="80" />
</div>
<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80" heigth="80" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="80" heigth="80" />
</div>
