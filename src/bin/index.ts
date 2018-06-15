#!/usr/bin/env node

import * as yargs from 'yargs';

yargs
  .command(require('./commands/dev'))
  .command(require('./commands/start'))
  .help().argv;
