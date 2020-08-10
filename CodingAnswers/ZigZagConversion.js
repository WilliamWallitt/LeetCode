const convert = function(s, numRows) {

    // if only one row return string
    if (numRows === 1) {
        return s
    }

    let curr_row = 0, dir = true
    let rows = []
    // populate each row with an empty arr
    for (let i = 0; i < numRows; i++) {
        rows.push([])
    }
    // iterate over string
    for (let i = 0; i < s.length; i++) {
        // if we are at the bottom or top of row
        if (curr_row > numRows - 1 || curr_row < 0) {
            // change direction
            dir = !dir
            // if the direction
            dir ? curr_row = 1 : curr_row = (numRows - 1) - 1
        }
        rows[curr_row].push(s[i])
        dir ? curr_row++ : curr_row--
    }
    let res = ""
    rows.map(item => {
         item.map(i => {
            res += i
        })
    })

    return res

}


let test = convert("Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.", 2)

console.log(test)
