import { createTestClient } from "apollo-server-testing";
import { getConnection } from "typeorm";
import { createServer } from "../../src/server";
import { createTestConnection } from "../utils/database";

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
    await createTestConnection();
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