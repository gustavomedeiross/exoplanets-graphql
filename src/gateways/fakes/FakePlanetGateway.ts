import { GatewayPlanet, PlanetGateway } from "../PlanetGateway";

export default class FakePlanetGateway implements PlanetGateway {
  async all(): Promise<GatewayPlanet[]> {
    return [];
  }
}