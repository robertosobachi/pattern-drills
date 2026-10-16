# Group Anagrams

Given an array of strings `strs`, group the strings that are anagrams of each other.

- Return the groups in any order, and the strings within a group in any order: the tests sort
  each group, then sort the groups, before comparing.

## Constraints

- `0 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` contains only lowercase English letters.

## Examples

| Input                                   | Output                                        | Why                         |
| --------------------------------------- | --------------------------------------------- | --------------------------- |
| `["eat","tea","tan","ate","nat","bat"]` | `[["ate","eat","tea"],["bat"],["nat","tan"]]` | three anagram groups        |
| `[""]`                                  | `[[""]]`                                      | the empty string is a group |
| `["a"]`                                 | `[["a"]]`                                     | single string               |
| `[]`                                    | `[]`                                          | empty input, no groups      |

Log: transfer, 2026-10-13, redo.
