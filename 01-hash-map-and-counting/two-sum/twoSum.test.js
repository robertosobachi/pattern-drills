import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from './twoSum.js';

const sorted = (pair) => [...pair].sort((a, b) => a - b);

describe('twoSum', () => {
  it('finds a pair at the start', () => {
    assert.deepEqual(sorted(twoSum([2, 7, 11, 15], 9)), [0, 1]);
  });

  it('does not reuse the same element', () => {
    assert.deepEqual(sorted(twoSum([3, 2, 4], 6)), [1, 2]);
  });

  it('handles equal values at different indices', () => {
    assert.deepEqual(sorted(twoSum([3, 3], 6)), [0, 1]);
  });

  it('handles negative numbers', () => {
    assert.deepEqual(sorted(twoSum([-1, -2, -3, -4, -5], -8)), [2, 4]);
  });
});
