import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/trpc';

function handler(req: Request, res: Response) {
  fetchRequestHandler({
    endpoint: 'api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}

export { handler as GET, handler as POST };
