import createBuilder from '../builder';
import createHandler from '../handler';

export const command = 'dev [dir]';

export const aliases = '$0';

export const describe =
  'Replaces `next dev`. Starts the application in development mode (hot-code reloading, error reporting, etc).';

export const builder = createBuilder();

export const handler = createHandler('development');
