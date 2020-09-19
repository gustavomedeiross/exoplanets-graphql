import FakeStationGateway from "../gateways/fakes/FakeStationGateway";
import InstallStation from "./InstallStation";

let fakeStationGateway: FakeStationGateway;
let sut: InstallStation;

describe('InstallStation', () => {
  beforeEach(() => {
    fakeStationGateway = new FakeStationGateway();
    sut = new InstallStation(fakeStationGateway);
  });

  it('should install a new station', async () => {
    await sut.run({ planetName: 'Test' });
    const station = fakeStationGateway.findStationByPlanetName('Test');
    expect(station).toBeDefined();
  });
});
