import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import ArcSecondPlanetGateway from "./gateways/impl/ArcSecondPlanetGateway";
import PlanetResolver from "./resolvers/PlanetResolver";
import StationResolver from "./resolvers/StationResolver";

export type DataSources = {
  planet: ArcSecondPlanetGateway;
}

export type Context = {
  dataSources: DataSources;
}

export const createServer = async(): Promise<ApolloServer> => new ApolloServer({
  schema: await buildSchema({
    resolvers: [PlanetResolver, StationResolver],
  }),
  dataSources: (): DataSources => {
    return {
      planet: new ArcSecondPlanetGateway(),
    };
  }
});
