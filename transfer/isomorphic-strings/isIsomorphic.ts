/**
 * Isomorphic Strings
 *
 * Given two strings of the same length, return true if s can be turned into t by replacing
 * characters. Every occurrence of a character must be replaced by the same character, two
 * different characters can't be replaced by the same character, a character may be replaced by
 * itself, and the order of characters stays the same.
 */
export function isIsomorphic(s: string, t: string): boolean {
  const conversionPairs = new Map<string, string>();
  const takenTargets = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    const convertedToCharacter = conversionPairs.get(sChar);
    const isTargetTaken = takenTargets.has(tChar);

    if (!convertedToCharacter && !isTargetTaken) {
      conversionPairs.set(sChar, tChar);
      takenTargets.add(tChar);
      continue;
    }

    if (convertedToCharacter !== tChar) {
      return false;
    }
  }

  return true;
}
