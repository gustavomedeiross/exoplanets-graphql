import { createTestClient } from 'apollo-server-testing';
import { getConnection } from 'typeorm';
import { createServer } from "../../src/server";
import { createTestConnection } from '../utils/database';

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
    await createTestConnection();
  });

  afterAll(async() => {
    await getConnection().close();
  });

  it('should return the suitable planets', async () => {
    const server = await createServer();
    const { query }  = createTestClient(server);

    const response = await query({ query: SUITABLE_PLANETS });
    expect(response.data?.suitablePlanets.length).toBeGreaterThan(0);
  }, 30000);
});