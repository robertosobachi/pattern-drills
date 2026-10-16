/**
 * Two Sum
 *
 * Given an array of integers and a target, return the indices of the two numbers that add up to
 * the target. Exactly one solution exists, and the same element can't be used twice. The indices
 * can be returned in any order.
 */
export function twoSum(nums: number[], target: number): [number, number] {
  const lookupMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    lookupMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complementIndex = lookupMap.get(target - nums[i]);

    if (complementIndex !== undefined && i !== complementIndex) {
      return [i, complementIndex];
    }
  }

  throw new Error(`No two numbers add up to ${target}`);
}
