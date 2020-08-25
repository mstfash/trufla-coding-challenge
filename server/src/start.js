import {} from 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import logger from 'loglevel';
import cors from 'cors';
import { MongoConnector } from './mongo-connector';
import { getRoutes } from './routes';
import errorMiddleware from './utils/error-middleware';

const mongoConnector = new MongoConnector();

async function startServer({ port = process.env.PORT || '3030' } = {}) {
  await mongoConnector.connect();
  const app = express();
  app.use(cors());
  app.use('/api', getRoutes());

  app.use(errorMiddleware);

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`);
      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };
      setupCloseOnExit(server);
      resolve(server);
    });
  });
}

function setupCloseOnExit(server) {
  // thank you stack overflow
  // https://stackoverflow.com/a/14032965/971592
  async function exitHandler(options = {}) {
    await mongoConnector.disconnect();
    await server
      .close()
      .then(() => {
        logger.info('Server successfully closed');
      })
      .catch((e) => {
        logger.warn('Something went wrong closing the server', e.stack);
      });
    // eslint-disable-next-line no-process-exit
    if (options.exit) process.exit();
  }

  // do something when app is closing
  process.on('exit', exitHandler);

  // catches ctrl+c event
  process.on('SIGINT', exitHandler.bind(null, { exit: true }));

  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
  process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

  // catches uncaught exceptions
  process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
}

export { startServer };
