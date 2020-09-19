import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { DataSources } from ".";
import ArcSecondPlanetGateway from "./gateways/impl/ArcSecondPlanetGateway";
import PlanetResolver from "./resolvers/PlanetResolver";
import StationResolver from "./resolvers/StationResolver";

// TODO check nullble types GraphQL
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
