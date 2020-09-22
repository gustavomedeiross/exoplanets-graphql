import {  Ctx, Query, Resolver } from "type-graphql";
import Planet from "../entities/Planet";
import StationGatewayImpl from "../gateways/impl/StationGatewayImpl";
import { Context } from "../server";
import GetSuitablePlanets from "../useCases/GetSuitablePlanets";

@Resolver(of => Planet)
export default class PlanetResolver {
  @Query(returns => [Planet])
  async suitablePlanets(@Ctx() ctx: Context): Promise<Planet[]> {
    const useCase = new GetSuitablePlanets(ctx.dataSources.planet, new StationGatewayImpl());
    return useCase.run();
  }
}