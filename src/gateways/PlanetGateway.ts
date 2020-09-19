// TODO change this name
export type GatewayPlanet = {
  name: string;
  mass?: {
    value: number;
    unit: string;
  }
}

export interface PlanetGateway {
  all(): Promise<GatewayPlanet[]>;
}