import ArcSecondPlanetGateway from "./ArcSecondPlanetGateway";
import StationGatewayImpl from "./StationGatewayImpl";

const stationGateway = new StationGatewayImpl();
const planetGateway = new ArcSecondPlanetGateway();

export {
  stationGateway,
  planetGateway
}