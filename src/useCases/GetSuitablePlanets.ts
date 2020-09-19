import Planet from "../entities/Planet";
import { PlanetGateway } from "../gateways/PlanetGateway";
import StationGateway from "../gateways/StationGateway";

export default class GetSuitablePlanets {
  constructor(
    private planetGateway: PlanetGateway,
    private stationGateway: StationGateway
  ) {}

  public async run(): Promise<Planet[]> {
    const apiResponse = await this.planetGateway.all();

    const suitablePlanets = apiResponse
    .filter(p => p.mass && p.mass.value)
    .filter(p => {
      return p.mass?.unit === 'M_jup' && p.mass.value > 25;
    });

    const map = async(p: any) => {
      const hasStation = !!(await this.stationGateway.findStationByPlanetName(p.name));

      return new Planet({
        name: p.name,
        mass: p.mass.value,
        hasStation,
      });
    };

    return Promise.all(suitablePlanets.map((p: any) => map(p)));
  }
}