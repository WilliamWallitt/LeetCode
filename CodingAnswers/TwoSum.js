const twoSum = (nums, target) => {

        for (let index = 0; index < nums.length; index++) {
            let item = nums[index]
            for (let i = 0; i < nums.length; i++) {
                if (i !== index) {
                    let val = nums[i] + item
                    if (val === target) {
                        if (i > index) {
                            return [index, i]
                        } else {
                            return [i, index]
                        }

                    }
                }
            }
        }
}


const twoSumBetter = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(target - nums[i])) {
            let index = nums.findIndex((elem) => elem === target - nums[i])
            if (index !== i) {
                return i > index ? [index, i] : [i, index]
            }
        }
    }



}


let solution_2 = twoSum([2, 7, 11, 15], 9)
let solution_1 = twoSumBetter([2, 7, 11, 15], 9)
console.log(solution_1, solution_2)
