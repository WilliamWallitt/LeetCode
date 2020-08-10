const firstMissingPositive = function(nums) {

    nums = nums.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        else return 0
    })

    if (nums[nums.length - 1] < 1 || nums.length < 1) {
        return 1
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (nums[i] > 1) {
                return 1
            }
            nums = nums.slice(i, nums.length)
            break
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        let next = nums[i + 1], curr = nums[i]
        if (next - curr !== 1 && next-curr !== 0) {
            return curr + 1
        }
    }

    return nums[nums.length - 1] + 1


}

console.log(firstMissingPositive([7,8,9,11,12]))
