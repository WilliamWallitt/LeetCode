// @params(string[char])
// return int

let lengthOfLongestSubstring = (s) => {
    s = s.split('')
    let longest = 0
    s.map((item, index) => {
        let curr = [item]
        for (let i = index + 1; i < s.length; i++) {
            // if the next letter is not a duplicate, add to curr
            if (!curr.includes(s[i])) {
                curr.push(s[i])
            } else {
                if (longest < curr.length) {
                    longest = curr.length
                }
                break
            }
        }
        if (longest < curr.length) {
            longest = curr.length
        }
    })
    return longest
}


console.log(lengthOfLongestSubstring("abcabacabb"))

const multiply = function(num1, num2) {

    let result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        let overflow = 0
        // start at end of array
        let k = num2.length + i
        // iterate through other number, from end to start
        for (let j = num2.length - 1; j >= 0; j--) {
            // product is the curr number * number in the other number + overflow from previous result + the current result
            // this is due to the result being updated with each multiplication
            let product = num1[i] * num2[j] + overflow + result[k]
            // result is value from 0 - 9  so 16 would be 6 remainder 1
            result[k] = product % 10
            // overflow is current value - result / 10 so 16 - 6 / 10 = 1
            overflow = (product - result[k]) / 10
            k --
        }
        result[k] += overflow
    }

    return result.join('').replace(/^0+(.)/, '$1');
}
