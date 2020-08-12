// this works, but takes too long
// something like BFS would be better

const getPermutation = function (n, k) {

    let x = []
    let nums = []
    for (let i = 1; i < n + 1; i++) {
        nums.push(i)
    }

    function optimised_permutations (nums, index) {

        if (index >= nums.length - 1) {
            x.push(Array.from(nums))
            return null
        } else {

            for (let j = index; j < nums.length; j++) {

                // we are just swapping elements in the array
                let current = nums[index]
                nums[index] = nums[j]
                nums[j] = current

                // for that sub arr, calculate the sub perms for that array
                optimised_permutations(nums, index + 1)
                // when we go back up the stack, switch back the elements
                current = nums[index]
                nums[index] = nums[j]
                nums[j] = current
            }
        }

    }

    optimised_permutations(nums, 0)

    x = x.sort()

    let res = ""
    x[k - 1].map(item => {
        res += item
    })

    return res

}



console.log(getPermutation(9, 273815))
