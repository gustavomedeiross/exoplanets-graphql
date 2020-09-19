import { RESTDataSource } from "apollo-datasource-rest";
import { GatewayPlanet, PlanetGateway } from "../PlanetGateway";

interface ApiResponse {
  results: GatewayPlanet[];
}

export default class ArcSecondPlanetGateway extends RESTDataSource implements PlanetGateway {
  constructor() {
    super();
    this.baseURL = 'https://api.arcsecond.io';
  }

  async all(): Promise<GatewayPlanet[]> {
    const planets = [];
    for(let i=1; i<=10; i++)
     planets.push(await this.paginate(i));

    return planets.flat();
  }

  private async paginate(page: number): Promise<GatewayPlanet[]> {
    const apiResponse = await this.get<ApiResponse>(`exoplanets?page=${page}`);
    return apiResponse.results;
  }
}