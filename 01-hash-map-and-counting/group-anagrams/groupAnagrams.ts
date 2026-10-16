/**
 * Group Anagrams
 *
 * Given an array of strings, group the strings that are anagrams of each other. The groups, and
 * the strings within each group, can be in any order.
 */
export function groupAnagrams(strings: string[]): string[][] {
  const groups: Map<string, string[]> = new Map();

  for (let i = 0; i < strings.length; i++) {
    const word = strings[i];
    const letterCount: { [key: string]: number } = {};

    for (let z = 0; z < word.length; z++) {
      const letter = word[z];
      letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1;
    }

    const key = Object.keys(letterCount)
      .sort()
      .map((letter: string) => {
        return `${letter}${letterCount[letter]}`;
      })
      .join('');

    const group = groups.get(key);

    if (group) {
      group.push(word);
    } else {
      groups.set(key, [word]);
    }
  }

  return [...groups.values()];
}
