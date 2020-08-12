const threeSum = function(nums) {

    if (nums.length < 3) {
        return []
    }

    nums = nums.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        else return 0
    })


    const remove_dups = function (arr) {

        if (arr.length < 2) {
            return arr
        }

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            for (let j = i + 1; j < arr.length; j++) {
                if (JSON.stringify(item.sort()) === JSON.stringify(arr[j].sort())) {
                    arr.splice(j, 1)
                    j --
                }
            }
        }
        return arr

    }

    let result = []

    for (let i = 0; i < nums.length; i++) {
        let curr_num = nums[i]
        let next_index = i + 1
        let index = i + 2
        while (true) {

            if (next_index > nums.length - 1) {
                break
            }

            let next_num = nums[next_index]
            let after = nums[index]


            if (curr_num + next_num + after === 0) {
                result.push([curr_num, next_num, after])
            }

            if (index < nums.length - 1) {
                index ++
            } else {
                next_index ++
                index = next_index + 1
            }

        }
    }

    return remove_dups(result)

}

let x = (threeSum([12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11]))
console.log(x)
