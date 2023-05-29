import {computeSum} from '@charneykaye/compute-sum';

export const computeTripleSum = (a: number, b: number, c: number) => {
  return computeSum(computeSum(a, b),c)
}
