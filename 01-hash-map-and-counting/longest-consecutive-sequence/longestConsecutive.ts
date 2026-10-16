/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers, return the length of the longest run of consecutive
 * integers. Order and position in the array don't matter, and duplicates count once.
 * Target: O(n) time.
 */
export function longestConsecutive(nums: number[]): number {
  const listNumbers = new Set(nums);

  let bestSeries = 0;

  listNumbers.forEach((currentNumber: number) => {
    let nextNumber = currentNumber + 1;
    let count = 0;

    if (!listNumbers.has(currentNumber - 1)) {
      count = 1;

      while (listNumbers.has(nextNumber)) {
        count++;
        nextNumber++;
      }
    }

    bestSeries = Math.max(bestSeries, count);
  });

  return bestSeries;
}