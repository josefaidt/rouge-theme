#!/usr/bin/env node
const { existsSync: exists, promises: fs } = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const c = require('chalk');
const dotenv = require('dotenv');
const nodemon = require('nodemon');
const loadCommands = require('./support/loadCommands');

// set default node_env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const { log } = console;
const packageDir = path.dirname(path.resolve('package.json'));

async function loadEnv(options = { set: false }) {
  // load using dotenv - follow CRA loading pattern
  const env = {};

  const envFile = path.resolve(packageDir, '.env');
  if (exists(envFile)) {
    Object.assign(env, dotenv.parse(await fs.readFile(envFile)));
  }

  const envNodeFile = path.resolve(`${envFile}.${process.env.NODE_ENV.toLowerCase()}`);
  if (exists(envNodeFile)) {
    Object.assign(env, dotenv.parse(await fs.readFile(envNodeFile)));
  }

  const envLocalFile = path.resolve(`${envNodeFile}.local`);
  if (exists(envLocalFile)) {
    Object.assign(env, dotenv.parse(await fs.readFile(envLocalFile)));
  }

  if (options && options.set) {
    for (const e in env) {
      process.env[e] = env[e];
    }
  }

  return env;
}

async function start(entry, options) {
  await loadEnv({ set: true });
  const cmd = spawn('node', ['out/index.js'], {
    cwd: packageDir,
  });

  cmd.stdout.on('data', data => {
    log(`${data}`);
  });

  cmd.stderr.on('data', data => {
    log(c.red(`${data}`));
  });

  cmd.on('close', code => {
    if (code === 0) {
      log(c.green('bd exited with code 0'));
    } else {
      log(c.yellow(`bd exited with code ${code}`));
    }
  });
}

async function init() {
  const packageFilePath = path.resolve('package.json');
  const packageFile = JSON.parse(await fs.readFile(packageFilePath, 'utf8'));
  return {
    entry:
      (packageFile.main && path.resolve(packageFile.main)) || (packageFile.entry && path.resolve(packageFile.entry)) || path.dirname(packageFilePath),
    name: packageFile.name,
  };
}

async function main(command, args) {
  const commands = await loadCommands();
  // start!
  log(c.blue(`bd CLI ${JSON.parse(await fs.readFile(path.join(__dirname, 'package.json'))).version}`));

  // get project details
  let { entry, name } = await init();
  // argument regex (--arg, -a)
  const regex = /^-{1,2}(?<arg>[A-z]+)+$/i;
  // parse argHash (--yay true => { yay: true })
  const argHash = args.reduce((argHash, arg, index) => {
    if (regex.test(arg)) {
      // verify next input is not also an argument without an input
      const name = arg.match(/^-{1,2}(?<arg>[A-z]+)+$/i).groups.arg;
      if (regex.test(args[index + 1])) throw new Error(`Did not receive input for ${name}`);
      argHash[name] = args[index + 1];
    } else if (/\.(js|mjs|cjs)$/i.test(arg)) {
      // test if argument is actually a file path
      // then overwrite entry
      entry = path.resolve(arg);
    }
    return argHash;
  }, {});
  if (!entry) throw new Error('Must define an entry point as package.main or passed to command');
  // execute command
  try {
    await commands.find(cmd => cmd.name === command)(entry, argHash);
  } catch (error) {
    log(c.red(`Unable to execute ${command}\n${error}`))
  }
}

const [nodePath, builderPath, command, ...args] = process.argv;
main(command, args);