import { CommandBuilder } from 'yargs';

export default (argvExtensions?: CommandBuilder): CommandBuilder => {
  const argvDefaults: CommandBuilder = {
    dir: {
      default: '.',
      describe: 'The location of your Next project',
    },
    staticMarkup: {
      default: false,
      describe: 'Use renderToStaticMarkup() instead of renderToString().',
    },
    quiet: {
      default: false,
      describe: 'Hide error messages containing server information',
    },
  };

  return Object.assign({}, argvDefaults, argvExtensions);
};
