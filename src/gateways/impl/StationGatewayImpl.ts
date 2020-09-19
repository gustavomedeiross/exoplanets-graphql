import { getRepository, Repository } from "typeorm";
import Station from "../../entities/Station";
import StationGateway from "../StationGateway";

export default class StationGatewayImpl implements StationGateway {
  private ormRepository: Repository<Station>;

  constructor() {
    this.ormRepository = getRepository(Station);
  }

  async findStationByPlanetName(planetName: string): Promise<Station | undefined> {
    return this.ormRepository.findOne({ where: { planetName } });
  }

  async create(planetName: string): Promise<Station> {
    return this.ormRepository.save({ planetName });
  }
}