import express from 'express';
import { getPayloadClient } from './getPayload';
import { nextApp, nextHandler } from './next-utils';
const app = express();
const PORT = Number(process.env.PORT) || 3000;
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc/';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });
type Context = Awaited<ReturnType<typeof createContext>>;

async function start() {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`ADMIN URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, async () => {
      payload.logger.info(
        'Next.JS App URL:' + process.env.NEXT_PUBLIC_SERVER_URL,
      );
    });
  });
}

start();
