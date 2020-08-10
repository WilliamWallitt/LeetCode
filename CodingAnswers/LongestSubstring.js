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

