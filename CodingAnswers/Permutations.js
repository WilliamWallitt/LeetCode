const permute = function(nums) {

    if (nums.length === 1) return [nums]

    let number_of_perms = function (length) {
        if (length === 0) return 1;
        if (length === 1) return 1;
        else {
            return (length * number_of_perms(length - 1))
        }
    }

    let random_index = function(arr) {
        let random = []
        while (random.length !== nums.length) {
            let random_index = Math.floor(Math.random() * arr.length)
            if (!random.includes(random_index)) {
                random.push(random_index)
            }
        }

        return random
    }

    let is_valid = function(arr, curr) {
        for (let i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === JSON.stringify(curr)) {
                return false
            }
        }
        return true
    }

    let list_of_indexs = []

    while (list_of_indexs.length < number_of_perms(nums.length)) {
        let rand = random_index(nums)
        if (is_valid(list_of_indexs, rand)) {
            list_of_indexs.push(rand)
        }
    }

    let permutations = []
    for (let i = 0; i < list_of_indexs.length; i++) {
        let curr = list_of_indexs[i]
        let perm = []
        for (let j = 0; j < curr.length; j++) {
            perm.push(nums[curr[j]])
        }
        permutations.push(perm)
    }

    return permutations

}



const optimised_permute = function (nums) {

    let x = []

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
    return x

}

console.log("Optimised", optimised_permute([1,2,3]))
console.log("Test", permute([1,2,3]))



