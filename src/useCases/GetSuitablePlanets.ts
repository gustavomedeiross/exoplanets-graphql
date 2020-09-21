import Planet from "../entities/Planet";
import { GatewayPlanet, PlanetGateway } from "../gateways/PlanetGateway";
import StationGateway from "../gateways/StationGateway";

export default class GetSuitablePlanets {
  constructor(
    private planetGateway: PlanetGateway,
    private stationGateway: StationGateway
  ) {}

  public async run(): Promise<Planet[]> {
    const apiResponse = await this.planetGateway.all();

    const suitablePlanets = apiResponse.filter(p => this.isSuitable(p));

    return Promise.all(suitablePlanets.map(p => this.map(p)));
  }

  private isSuitable(planet: GatewayPlanet) {
    return planet.mass && planet.mass?.value > 25 && planet.mass?.unit === 'M_jup';
  }

  private async map(planet: GatewayPlanet): Promise<Planet> {
      return new Planet({
        name: planet.name,
        mass: planet.mass!.value,
        hasStation: (await this.hasStation(planet.name)),
      });
  }

  private async hasStation(planetName: string): Promise<boolean> {
    return Boolean(await this.stationGateway.findStationByPlanetName(planetName));
  }
}