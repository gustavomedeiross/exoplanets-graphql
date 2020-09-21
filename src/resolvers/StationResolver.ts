import { Arg, Mutation, Resolver } from "type-graphql";
import InstallStation from "../useCases/InstallStation";
import Station from "../entities/Station";
import { stationGateway } from "../gateways/impl";

@Resolver(of => Station)
export default class StationResolver {
  @Mutation(returns => Station)
  async installStation(@Arg('planetName') planetName: string): Promise<Station> {
    const useCase = new InstallStation(stationGateway);
    return await useCase.run({ planetName });
  }
}