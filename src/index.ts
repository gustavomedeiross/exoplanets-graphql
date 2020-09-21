import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createServer } from './server';


(async() => {
  await createConnection();
  const server = await createServer();

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
