Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});

const letterCombinations = function(digits) {
    // generate alphabet
    let alphabet = []
    const start = 'a'.charCodeAt(0);
    const end = 'z'.charCodeAt(0);
    for (let i = start; i <= end; i++) {
        alphabet.push(String.fromCharCode(i))
    }

    let keys = {}
    let index = 0
    for (let i = 2; i < 10;i++) {
        if (i === 7 || i === 9) {
            keys[i] = alphabet.slice(index, index + 4)
            index += 4
        } else {
            keys[i] = alphabet.slice(index, index + 3)
            index += 3
        }
    }

    let alph = []
    for (let i = 0; i < digits.length; i++) {
        let key = keys[digits[i]]
        alph.push(key)
    }

    alph.sort((a, b) => {
        if (a.length < b.length) return -1
        if (a.length > b.length) return 1
        else return 0
    })

    if (digits.length < 1) {
        return alph[digits[0]] ? alph[digits[0]] : []
    }


    const get_pairs = function(arr1, list_of_arr) {

        let pairs = []

        let list_of_index = Array(list_of_arr.length - 1).fill(0)
        let test = 0

        // iterate through first array
        for (let i = 0; i < arr1.length; i++) {
            // get first item
            let current_value = arr1[i]
            let next_index = 1
            // iterate over next arrays
            while (true) {

                let index = 0
                let res = [current_value]

                for (let j = 0; j < list_of_index.length; j++) {

                    let current_index = list_of_index[j]

                    let array = list_of_arr[j + 1][current_index]
                    res.push(array)

                    if (list_of_index[index] >= list_of_arr[j + 1].length - 1) {
                        list_of_index[index] = 0
                        index ++
                    }
                }

                pairs.push(res)

                // console.log(list_of_index, res, index)
                if (index > list_of_index.length - 1) {
                    break
                }


                list_of_index[index] = list_of_index[index] + 1



            }
        }
        return pairs
    }

    let result = get_pairs(alph[0], alph)

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].join("")
    }

    return result

}

const tt = function(digits) {
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    let result = [];
    function backTrack(combination, nextDigit) {
        // base case reached end of nextDigit
        if (nextDigit.length === 0) {
            result.push(combination);
        }
        // get current next digit
        let digit = nextDigit.substring(0, 1);
        // get letters for current digit
        let letters = map[digit];
        if (letters) {
            // iterate through letters of current digit
            for(let i=0; i<letters.length; i++) {
                let letter = map[digit].substring(i, i+1);
                // call backTrack again recursively with the rest of nextDigits
                backTrack(combination + letter, nextDigit.substring(1));
            }
        }
    }
    if (digits.length !== 0) {
        backTrack("", digits)
    }
    return result;
};


