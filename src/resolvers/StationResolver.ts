import { Arg, Mutation, Resolver } from "type-graphql";
import InstallStation from "../useCases/InstallStation";
import Station from "../entities/Station";
import StationGatewayImpl from "../gateways/impl/StationGatewayImpl";

@Resolver(of => Station)
export default class StationResolver {
  @Mutation(returns => Station)
  async installStation(@Arg('planetName') planetName: string): Promise<Station> {
    const useCase = new InstallStation(new StationGatewayImpl());
    return await useCase.run({ planetName });
  }
}