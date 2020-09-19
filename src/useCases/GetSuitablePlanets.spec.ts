import FakePlanetGateway from "../gateways/fakes/FakePlanetGateway";
import FakeStationGateway from "../gateways/fakes/FakeStationGateway";
import GetSuitablePlanets from "./GetSuitablePlanets";

let fakePlanetGateway: FakePlanetGateway;
let fakeStationGateway: FakeStationGateway;
let sut: GetSuitablePlanets;

// TODO improve the tests readability
describe('GetSuitablePlanets', () => {
  beforeEach(() => {
    fakePlanetGateway = new FakePlanetGateway();
    fakeStationGateway = new FakeStationGateway();
    sut = new GetSuitablePlanets(fakePlanetGateway, fakeStationGateway);
  });

  it('should return planets', async() => {
    jest.spyOn(fakePlanetGateway, 'all').mockResolvedValueOnce([
      {
        name: 'Planet One',
        mass: { unit: 'M_jup', value: 30 }
      }
    ]);
    const response = await sut.run();
    expect(response.length).toBe(1);
  });

  it("should remove the planets that don't have a mass", async () => {
    jest.spyOn(fakePlanetGateway, 'all').mockResolvedValueOnce([
      {
        name: 'Planet One',
        mass: undefined
      }
    ]);
    const response = await sut.run();
    expect(response.length).toBe(0);
  });

  it("should remove the planets that don't have their mass greater than 25 jupiter mass", async () => {
    jest.spyOn(fakePlanetGateway, 'all').mockResolvedValueOnce([
      {
        name: 'Planet One',
        mass: { unit: 'M_jup', value: 26 }
      },
      {
        name: 'Planet Two',
        mass: { unit: 'M_jup', value: 25 }
      },
      {
        name: 'Planet Three',
        mass: { unit: 'M_jup', value: 24 }
      },
      {
        name: 'Planet Four',
        mass: { unit: 'notM_jup', value: 30 }
      }
    ]);

    const response  = await sut.run();
    expect(response.length).toBe(1);
    expect(response.every(p => p.mass > 25)).toBeTruthy();
    expect(response.some(p => p.name !== 'Planet One')).toBeFalsy();
  });
  
  // TODO test if hasStation is working
}); 
