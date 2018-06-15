import { join } from 'path';

export function withCustomServer(nextConfig: any = {}) {
  nextConfig.withCustomServer = true;

  return Object.assign({}, nextConfig, {
    async webpack(config, options) {
      const { dir, isServer } = options;
      const { serverEntry = join(dir, 'server'), webpack } = nextConfig;

      if (isServer) {
        const originalEntries = await config.entry();
        config.entry = {
          ...originalEntries,
          'server.js': serverEntry,
        };
      }

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    },
  });
}
