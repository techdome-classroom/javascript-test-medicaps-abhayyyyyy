function smallestMissingPositiveInteger(nums) {
  // console.log(typeof(nums))
  // Implement the function smallest_missing_positive_integer
  const numSet = new Set(nums.filter(num => num > 0));

    let smallestMissing = 1;
    while (numSet.has(smallestMissing)) {
        smallestMissing++;
    }

    return smallestMissing;
    // return 0;

}


module.exports = smallestMissingPositiveInteger;
