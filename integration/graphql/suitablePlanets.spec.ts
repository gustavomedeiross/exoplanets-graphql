import { createTestClient } from 'apollo-server-testing';
import { createConnection, getConnection } from "typeorm";
import { createServer } from "../../src/server";

const SUITABLE_PLANETS = `
  query {
    suitablePlanets {
      name,
      mass,
      hasStation
    }
  }
`;

describe('suitablePlanets', () => {
  beforeAll(async() => {
    await createConnection();
  });

  afterAll(async() => {
    await getConnection().close();
  });

  it('should return the planets', async () => {
    const server = await createServer();
    const { query }  = createTestClient(server);

    const response = await query({ query: SUITABLE_PLANETS });
    expect(response.data?.suitablePlanets.length).toBeGreaterThan(0);
  });
});