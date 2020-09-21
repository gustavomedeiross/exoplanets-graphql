import {  Ctx, Query, Resolver } from "type-graphql";
import Planet from "../entities/Planet";
import { stationGateway } from "../gateways/impl";
import GetSuitablePlanets from "../useCases/GetSuitablePlanets";

@Resolver(of => Planet)
export default class PlanetResolver {
  @Query(returns => [Planet])
  async suitablePlanets(@Ctx() ctx: Context): Promise<Planet[]> {
    const useCase = new GetSuitablePlanets(ctx.dataSources.planet, stationGateway);
    return useCase.run();
  }
}