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
    const promises = [];
    for(let i=1; i<=10; i++)
     promises.push(this.paginate(i));

     return (await Promise.all(promises)).flat();
  }

  private async paginate(page: number): Promise<GatewayPlanet[]> {
    const apiResponse = await this.get<ApiResponse>(`exoplanets?page=${page}`);
    return apiResponse.results;
  }
}