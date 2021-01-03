class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
​
  binarySearch(nums, target) {
    // Insert code here;    
    var mid = Math.floor(nums.length / 2)
​
    // Base cases
    if (nums.length == 1 && nums[0] != target)
      return false
    if (target == nums[mid])
      return true
    else if (target < nums[mid])
      return this.binarySearch(nums.slice(0, mid), target)
    else if (target > nums[mid])
      return this.binarySearch(nums.slice(mid), target)
  }
}
​
​
// Do not edit this line;
let StudentSolution =  MySolution;

module.exports = StudentSolution;