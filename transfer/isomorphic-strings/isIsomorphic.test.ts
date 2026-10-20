import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isIsomorphic } from './isIsomorphic.ts';

describe('isIsomorphic', () => {
  it('accepts egg -> add', () => {
    assert.equal(isIsomorphic('egg', 'add'), true);
  });

  it('rejects foo -> bar', () => {
    assert.equal(isIsomorphic('foo', 'bar'), false);
  });

  it('accepts paper -> title', () => {
    assert.equal(isIsomorphic('paper', 'title'), true);
  });

  it('rejects two different characters of s replaced by the same character', () => {
    assert.equal(isIsomorphic('badc', 'baba'), false);
  });

  it('rejects one character of s replaced by two different characters', () => {
    assert.equal(isIsomorphic('aa', 'ab'), false);
  });

  it('accepts a single character', () => {
    assert.equal(isIsomorphic('a', 'b'), true);
  });

  it('accepts characters replaced by themselves', () => {
    assert.equal(isIsomorphic('abc', 'abc'), true);
  });

  it('accepts swapped characters', () => {
    assert.equal(isIsomorphic('abab', 'baba'), true);
  });

  it('handles digits, spaces and punctuation', () => {
    assert.equal(isIsomorphic('1 !1', 'x?yx'), true);
    assert.equal(isIsomorphic('1 !1', 'x?yy'), false);
  });

  it('handles the maximum length', () => {
    const s = 'ab'.repeat(25_000);
    const t = 'xy'.repeat(25_000);
    assert.equal(isIsomorphic(s, t), true);
    assert.equal(isIsomorphic(s, t.slice(0, -1) + 'x'), false);
  });
});
