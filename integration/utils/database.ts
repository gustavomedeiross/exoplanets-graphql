import { createConnection } from "typeorm";
import Planet from "../../src/entities/Planet";
import 'reflect-metadata';
import Station from "../../src/entities/Station";

export async function createTestConnection() {
    await createConnection({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: false,
      entities: [Station, Planet]
    });
}