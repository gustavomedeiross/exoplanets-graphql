import { Arg, Field, InputType, Mutation, Resolver } from "type-graphql";
import Station from "../entities/Station";
import StationGatewayImpl from "../gateways/impl/StationGatewayImpl";
import InstallStation from "../useCases/InstallStation";

@Resolver(of => Station)
export default class StationResolver {
  @Mutation(returns => Station)
  // TODO get repository through context
  async installStation(@Arg('planetName') planetName: string): Promise<Station> {
    const useCase = new InstallStation(new StationGatewayImpl());
    return await useCase.run({ planetName });
  }
}