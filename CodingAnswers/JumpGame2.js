class Jump {

    constructor(step, index, prev) {
        this.step = step
        this.index = index
        this.prev = prev
    }

    findMoves (arr) {
        let moves = []
        for (let i = this.index + 1; i < arr.length; i++) {
            if (i > arr[this.index] + this.index) {
                break
            }
            moves.push(i)
        }
        return moves
    }

}


// ok, so 75/92 test cases passed - it should be formulated as a search space problem

const jump = function(nums) {


    if (!nums.length) return;
    if (nums.length === 1) return 0;

    let starting_jump = new Jump(0, 0, null)
    let index = 0

    let best_move = function(array_of_index, arr, curr_index) {

        let current_jump_value = arr[curr_index]
        let max = 0, index = 0

        for (let i = 0; i < array_of_index.length; i++) {

            let value = arr[array_of_index[i]]

            if (current_jump_value + curr_index <= value + array_of_index[i]) {

                let arr_of_index_value = value + array_of_index[i]

                if (arr_of_index_value >= arr.length - 1) {
                    return array_of_index[i]
                }
                console.log(max, curr_index, value)
                max = value
                index = array_of_index[i]
            }
        }

        if (index > 0) {
            return index
        } else {
            return array_of_index[array_of_index.length - 1]
        }
    }

    for (let i = 0; i < 100; i++) {

        if (starting_jump.findMoves(nums).includes(nums.length - 1)) {
            return starting_jump.step + 1
        }

        starting_jump = new Jump(starting_jump.step + 1, best_move(starting_jump.findMoves(nums), nums, starting_jump.index), starting_jump)

        if (starting_jump.step > nums.length - 1) {
            index ++
            starting_jump = starting_jump.prev
        }

        if (starting_jump.findMoves(nums).includes(nums.length - 1)) {
            let jump = starting_jump
            while (jump.prev !== null) {
                jump = jump.prev
            }
            return starting_jump.step + 1
        }
    }

}

let x = jump(
    [10,9,8,7,6,5,4,3,2,1,1,0])
console.log(x)

