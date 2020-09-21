import {  Ctx, Query, Resolver } from "type-graphql";
import Planet from "../entities/Planet";
import { stationGateway } from "../gateways/impl";
import GetSuitablePlanets from "../useCases/GetSuitablePlanets";

@Resolver(of => Planet)
export default class PlanetResolver {
  @Query(returns => [Planet])
  async suitablePlanets(@Ctx() ctx: Context): Promise<Planet[]> {
    const getSuitablePlanets = new GetSuitablePlanets(ctx.dataSources.planet, stationGateway);
    return getSuitablePlanets.run();
  }
}