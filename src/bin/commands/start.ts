import createBuilder from '../builder';
import createHandler from '../handler';

export const command = 'start [dir]';

export const describe =
  'Replaces `next start`. Starts the application in production mode.\nThe application should be compiled with `next build` first.';

export const builder = createBuilder();

export const handler = createHandler('production');
