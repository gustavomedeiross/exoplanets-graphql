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
    const apiResponse = await this.get<ApiResponse>('exoplanets');
    return apiResponse.results;
  }
}