import Station from "../entities/Station";

export default interface StationGateway {
  findStationByPlanetName(planetName: string): Promise<Station | undefined>;
  create(planetName: string): Promise<Station>;
}