const longestPalindrome = function(s) {

    if (s.length <= 1) {
        return s
    }

    if (s.length === 2 && s[0] !== s[1]) {
        return s[0]
    }

    let left = 0, right = s.length - 1, str = ""

    while (left <= right) {

        for (let i = right; i > left; i--) {
            let curr = s.slice(left, i + 1)
            if (curr.split('').reverse().join('') === curr) {
                if (str.length < s.slice(left, i + 1).length) {
                    str = s.slice(left, i + 1)
                }
                break
            }
        }

        left ++
    }

    return str.length === 0 ? s[0] : str

}




console.log(longestPalindrome("aaabbbaaacbaabbabababababababbbabba"))

