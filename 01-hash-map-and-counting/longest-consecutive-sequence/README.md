# Longest Consecutive Sequence

Given an unsorted array of integers `nums`, return the length of the longest run of consecutive
integers.

- Order and position in the array don't matter: the run is over values, not indices.
- Duplicates count once.

## Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- Target: O(n) time.

## Examples

| Input                   | Output | Why                       |
| ----------------------- | ------ | ------------------------- |
| `[100,4,200,1,3,2]`     | `4`    | `1,2,3,4`                 |
| `[0,3,7,2,5,8,4,6,0,1]` | `9`    | `0..8`                    |
| `[]`                    | `0`    | empty input               |
| `[5]`                   | `1`    | single element            |
| `[1,2,2,3]`             | `3`    | duplicate `2` counts once |
| `[-2,-1,0,1]`           | `4`    | negatives work the same   |
| `[1,2,3,10]`            | `3`    | `10` is its own run       |

Log: transfer, 2026-10-16, redo.
