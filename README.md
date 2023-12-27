# 🛠️ | Simple Server Using knexJS
## 🧭 | Application information

> Este servidor se conecta a um banco de dados para cadrastrar usuários, retornar dados, criar e listar postagens.

    Obs: Este projeto tem a inicialmente a intenção de demonstrar a minha capacidade de trabalhar com o query builder "Knexjs". Futuramente posso subir novas atualizaçãoes para uma possivel api. 

- Version: 0.1.1

## 🌎 | Clone project
Para programadores que quiserem clonar e estudar ou até mesmo contribuir com esse projeto siga o *passo a passo*.

- Execute no bash o seguinte comando:

`git clone git@github.com:Noskine/simple_node_server_using_knexjs.git`

- Agora execute:

`npm install` ou `yarn install`

- Execute o anbiente de desenvolvimento:
 
`npm run dev` ou `yarn dev`

### 👌 | Banco de dados em desenvolvimento

O banco de dados está configurado com o docker sem a necessidade de ter um sgdb instalado na máquina. estamos usando o postgresql. 

Garanta que o docker esteja instalado corretamente na área: https://docs.docker.com/get-docker

Procure pelo arquivo `docker-compose.yml` e configure da melhor forma que achar.

após isso de um run: `docker compose up -d`;

## 🤖 | Description of technologies

### **Breve Descrição das Tecnologias Utilizadas no Projeto**

O uso destas tecnologias visa demonstrar minhas habilidades com backend construídos com JavaScript, que foi a principal stack utilizada no meu curso técnico. A utilização do Knex foi pelo simples motivo de conseguir utilizar as migrations, não necessariamente optando por um **_ORM_** que tornaria a aplicação mais pesada e um pouco mais abstrata em relação à linguagem SQL. O Knex foi escolhido como substituto do Sequelize, que foi ensinado no IMD. Seria necessário testar a aplicação, e para isso decidi usar o **_Vitest_**, já que considero o Jest bastante robusto e, para um projeto pequeno, não seria o ideal.

[![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]("#")
[![express](https://img.shields.io/badge/Express.js-2b292f?style=for-the-badge)]()
[![postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)]()
[![vitest](https://img.shields.io/badge/Vitest-2b292f?style=for-the-badge&logo=vite&logoColor=fac429)]()