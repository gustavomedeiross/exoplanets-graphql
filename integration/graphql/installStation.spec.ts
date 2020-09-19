import { createTestClient } from "apollo-server-testing";
import { createConnection, getConnection } from "typeorm";
import Station from "../../src/entities/Station";
import { createServer } from "../../src/server";

const INSTALL_STATION = `
  mutation InstallStation($planetName: String!) {
    installStation(planetName: $planetName) {
      id
      planetName
      createdAt
    }
  }
`;

describe('installStation', () => {
  beforeAll(async() => {
    await createConnection({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: false,
      entities: [Station],
    });
  });

  afterAll(async() => {
    await getConnection().close();
  });

  it('should return the planets', async () => {
    const server = await createServer();
    const { mutate }  = createTestClient(server);

    const response = await mutate({ mutation: INSTALL_STATION, variables: { planetName: 'Test' } });
    expect(response.data?.installStation.id).toBeDefined();
    expect(response.data?.installStation.planetName).toBe('Test');
  });
});