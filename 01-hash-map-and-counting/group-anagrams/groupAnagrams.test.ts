import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { groupAnagrams } from './groupAnagrams.ts';

const normalise = (groups: string[][]): string[][] =>
  groups.map((group) => [...group].sort()).sort((a, b) => a.join().localeCompare(b.join()));

describe('groupAnagrams', () => {
  it('groups anagrams together', () => {
    assert.deepEqual(normalise(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])), [
      ['ate', 'eat', 'tea'],
      ['bat'],
      ['nat', 'tan'],
    ]);
  });

  it('treats the empty string as its own group', () => {
    assert.deepEqual(normalise(groupAnagrams([''])), [['']]);
  });

  it('returns a single string as one group', () => {
    assert.deepEqual(normalise(groupAnagrams(['a'])), [['a']]);
  });

  it('returns no groups for an empty array', () => {
    assert.deepEqual(normalise(groupAnagrams([])), []);
  });
});
