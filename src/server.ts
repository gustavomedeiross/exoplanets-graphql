import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { planetGateway } from "./gateways/impl";
import PlanetResolver from "./resolvers/PlanetResolver";
import StationResolver from "./resolvers/StationResolver";

export const createServer = async(): Promise<ApolloServer> => new ApolloServer({
  schema: await buildSchema({
    resolvers: [PlanetResolver, StationResolver],
  }),
  dataSources: (): DataSources => {
    return {
      planet: planetGateway,
    };
  }
});
