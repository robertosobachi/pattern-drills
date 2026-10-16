# Two Sum

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers
that add up to `target`.

- Exactly one solution exists.
- The same element can't be used twice.
- Return the indices in any order: the tests sort the returned pair before comparing.

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`

## Examples

| Input                    | Output  | Why                       |
| ------------------------ | ------- | ------------------------- |
| `[2,7,11,15]`, `9`       | `[0,1]` | `2 + 7`                   |
| `[3,2,4]`, `6`           | `[1,2]` | `2 + 4`, not `3 + 3`      |
| `[3,3]`, `6`             | `[0,1]` | equal values, two indices |
| `[-1,-2,-3,-4,-5]`, `-8` | `[2,4]` | `-3 + -5`                 |

Log: learn, 2026-10-08, with hints.
