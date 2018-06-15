import { watch } from 'chokidar';
import * as next from 'next';
import { join } from 'path';

export default async (nextOptions: next.ServerOptions) => {
  try {
    let nextApp: next.Server = await prepareNextApp(nextOptions);

    if (nextOptions.dev) {
      const watcher = watch(['**/server/**/*', '**/server*', 'next.config*'], {
        ignored: 'node_modules',
        ignoreInitial: true,
      });

      watcher.on('all', async (event, path) => {
        console.log(`Found a change in ${path}, restarting the server...`);
        const http = (nextApp as any).http;
        if (http) {
          http.close();
          nextApp = await prepareNextApp(nextOptions);
        }
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

async function prepareNextApp(nextOptions: next.ServerOptions) {
  try {
    const nextApp: next.Server = next(nextOptions);

    if (!(nextApp as any).config.withCustomServer) {
      console.error(
        new Error('Apply the `next-custom-server` plugin in `next.config.js`'),
      );
      process.exit();
    }

    const dir = (nextApp as any).dir;
    const dist = (nextApp as any).dist;

    await nextApp.prepare();
    const srv = require(join(dir, dist, 'dist', 'server.js'));
    srv.default ? await srv.default(nextApp) : await srv(nextApp);

    return nextApp;
  } catch (err) {
    throw err;
  }
}
