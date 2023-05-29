import {describe, expect, test} from '@jest/globals';
import {computeTripleSum} from '../implementation';

const jestConsole = console

beforeEach(() => {
  global.console = require('console')
})

afterEach(() => {
  global.console = jestConsole
})

describe('Implementation', () => {
  test('computeTripleSum', async () => {
    expect(computeTripleSum(1, 2, 3)).toBe(6)
  })
})
