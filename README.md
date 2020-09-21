## GraphQL Exoplanets API

Essa é a minha solução para o melhor gerenciamento dos postos de carregamento de veículos espaciais não tripulados com propulsão de íons. Como resolução do problema, foi criada uma API em GraphQL que lista todos os exoplanetas com gravidade recomendada para a instalação de postos de carregamentos para esses veículos.

#### Tecnologias & Ferramentas utilizadas

- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/kj)
- [TypeGraphQL](https://typegraphql.com/)
- [API da ArcSecond](https://api.arcsecond.io/swagger/)
- [Docker e Docker Compose](https://www.docker.com/)

#### Executando o projeto

Na raiz do projeto, execute o seguinte comando para subir os containers do projeto:

```bash
$ docker-compose up -d
```

Em seguida, acesse a rota `http://localhost:4000` no seu navegador para utilizar o [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) e executar suas queries e mutations!

Também é possível executar os testes automatizados com o seguinte comando:

```bash
$ docker-compose exec node npm run test
```

#### Melhorias a serem feitas

- Separar a suite de testes unitários e de integração
- Validação de input
- Adicionar ESLint


