import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { longestConsecutive } from './longestConsecutive.js';

describe('longestConsecutive', () => {
  it('finds a run scattered through the array', () => {
    assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  });

  it('finds a long run with a duplicate', () => {
    assert.equal(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
  });

  it('returns 0 for an empty array', () => {
    assert.equal(longestConsecutive([]), 0);
  });

  it('returns 1 for a single element', () => {
    assert.equal(longestConsecutive([5]), 1);
  });

  it('counts duplicates once', () => {
    assert.equal(longestConsecutive([1, 2, 2, 3]), 3);
  });

  it('handles negative numbers', () => {
    assert.equal(longestConsecutive([-2, -1, 0, 1]), 4);
  });

  it('ignores a disconnected value', () => {
    assert.equal(longestConsecutive([1, 2, 3, 10]), 3);
  });
});
