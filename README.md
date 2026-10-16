# pattern-drills

Algorithm interview drills, grouped by pattern. Plain JavaScript (ES modules), tested with Node's
built-in test runner. No build step.

## Layout

```
01-hash-map-and-counting/
  longest-consecutive-sequence/
    README.md                     problem statement, constraints, examples
    longestConsecutive.test.js    tests, written first
    longestConsecutive.js         named export of the solution function
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

One folder per problem, in kebab-case, inside its pattern folder. The `.js` and `.test.js` files
are named after the exported function.

## Adding a problem

1. Create `<pattern>/<problem-name>/README.md` with the statement, constraints and examples.
2. Write `<functionName>.test.js` using `node:test` and `node:assert/strict`.
3. Add `<functionName>.js` with a stub that throws `Not implemented`. Run the tests and watch them
   fail.
4. Solve it until the tests pass.

Delete the pattern's `.gitkeep` once it has a problem in it.

## Running tests

```sh
npm test            # every *.test.js in the repo
npm run test:watch  # same, in watch mode
```

One problem (pass the test file, not the folder):

```sh
node --test 01-hash-map-and-counting/longest-consecutive-sequence/longestConsecutive.test.js
```

Format with `npm run format`. A husky pre-commit hook also runs Prettier on staged files.
