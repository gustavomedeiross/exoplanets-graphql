import { report } from "process";
import Station from "../entities/Station";
import StationGateway from "../gateways/StationGateway";

type Request = {
  planetName: string;
}

export default class InstallStation {
  private stationGateway: StationGateway;

  constructor(stationGateway: StationGateway) {
    this.stationGateway = stationGateway;
  }

  // TODO add validation
  // 1. station wasn't already created on that planet
  // 2. planet exists
  async run({ planetName }: Request): Promise<Station> {
    return this.stationGateway.create(planetName);
  }
}