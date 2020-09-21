import Station from "../../entities/Station";
import StationGateway from "../StationGateway";

export default class FakeStationGateway implements StationGateway {
  private stations: Station[] = [];

  async findStationByPlanetName(
    planetName: string
  ): Promise<Station | undefined> {
    return this.stations.find((s) => s.planetName === planetName);
  }

  async create(planetName: string): Promise<Station> {
    const station = new Station();
    Object.assign(station, { planetName, createdAt: new Date() });
    this.stations.push(station);
    return station;
  }
}

