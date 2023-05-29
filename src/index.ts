import * as Process from 'process';
import {Command, OptionValues} from 'commander';
import {computeTripleSum} from './implementation';

const figlet = require('figlet')

const pkg = require('../package.json')

//
// BOOTSTRAP
//

interface Options extends OptionValues {
  a: number;
  b: number;
  c: number;
}

const program = new Command()
.version(pkg.version)
.description(pkg.description)
.option('-a, --a <value>', 'Value A')
.option('-b, --b <value>', 'Value B')
.option('-c, --c <value>', 'Value C')
.parse(process.argv)

//
// MAIN
//

console.info(figlet.textSync('Compute Sum'))
const options: Options = program.opts()

const requireOption = (key: keyof Options) => {
  if (!(options[key] && 0 < options[key].length)) {
    console.error(`ERROR!\n--${key} required`)
    Process.exit(-1)
  }
}

requireOption('a')
requireOption('b')
requireOption('c')

console.info(`Sum: ${computeTripleSum(options.a, options.b, options.c)}`)
