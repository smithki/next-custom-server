import { ServerOptions } from 'next';
import createCustomServer from '../custom-server';

export default (nodeEnv: 'development' | 'production') => ({
  dir,
  staticMarkup,
  quiet,
}: ServerOptions) => {
  process.env.NODE_ENV = nodeEnv;
  const dev = process.env.NODE_ENV !== 'production';
  const options: ServerOptions = { dev, dir, staticMarkup, quiet };
  createCustomServer(options).catch(err => {
    throw err;
  });
};
