import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ArcSecondPlanetGateway from './gateways/impl/ArcSecondPlanetGateway';
import { createServer } from './server';


export type DataSources = {
  planet: ArcSecondPlanetGateway;
}

export type Context = {
  dataSources: DataSources;
}

(async() => {
  await createConnection();
  const server = await createServer();

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
