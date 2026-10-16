# pattern-drills

Algorithm interview drills, grouped by pattern. TypeScript (ES modules) run directly by Node's
built-in type stripping, tested with Node's built-in test runner. No build step and no type
checking at runtime: the editor shows type errors.

Type stripping only supports erasable syntax: no `enum`, `namespace` or constructor parameter
properties. Imports use the `.ts` extension, and type-only imports use `import type`.

## Problems

| Pattern                  | Problem                                                                                         | Test                                                                                                           | Status |
| ------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------ |
| 01 Hash map and counting | [Two Sum](01-hash-map-and-counting/two-sum/README.md)                                           | [twoSum.test.ts](01-hash-map-and-counting/two-sum/twoSum.test.ts)                                              | ⬜     |
| 01 Hash map and counting | [Group Anagrams](01-hash-map-and-counting/group-anagrams/README.md)                             | [groupAnagrams.test.ts](01-hash-map-and-counting/group-anagrams/groupAnagrams.test.ts)                         | ⬜     |
| 01 Hash map and counting | [Longest Consecutive Sequence](01-hash-map-and-counting/longest-consecutive-sequence/README.md) | [longestConsecutive.test.ts](01-hash-map-and-counting/longest-consecutive-sequence/longestConsecutive.test.ts) | ⬜     |

✅ tests pass, ⬜ not solved yet. Update the status by hand when a problem's tests go green.

## Layout

```
01-hash-map-and-counting/
  longest-consecutive-sequence/
    README.md                     problem statement, constraints, examples
    longestConsecutive.test.ts    tests, written first
    longestConsecutive.ts         named export of the solution function
02-two-pointers/
03-sliding-window/
04-prefix-sums/
05-stack/
06-binary-search/
07-tree-bfs-dfs/
08-graph-bfs-dfs/
09-heap-and-top-k/
10-intervals/
11-backtracking/
12-dynamic-programming/
```

One folder per problem, in kebab-case, inside its pattern folder. The `.ts` and `.test.ts` files
are named after the exported function.

## Adding a problem

1. Create `<pattern>/<problem-name>/README.md` with the statement, constraints and examples.
2. Write `<functionName>.test.ts` using `node:test` and `node:assert/strict`.
3. Add `<functionName>.ts` with a typed stub that throws `Not implemented`, with a comment above
   it describing the exercise. Run the tests and watch them fail.
4. Add a row to the Problems table with status ⬜.
5. Solve it until the tests pass, then set the status to ✅.

Delete the pattern's `.gitkeep` once it has a problem in it.

## Running tests

```sh
npm test            # every *.test.ts in the repo
npm run test:watch  # same, in watch mode
```

One problem (pass the test file, not the folder):

```sh
node --test 01-hash-map-and-counting/longest-consecutive-sequence/longestConsecutive.test.ts
```

Format with `npm run format`. A husky pre-commit hook also runs Prettier on staged files.
