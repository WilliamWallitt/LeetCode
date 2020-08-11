

const test = function(num1, num2) {

    let res = new Array(num1.length + num2.length).fill(0)
    // using long multiplication on strings
    // start at end of number or string.length - 1
    for (let i = num2.length - 1; i >= 0; i--) {
        // current item in res we are on
        let k = num1.length + i
        // res overflow for this multiplication
        let overflow = 0
        for (let j = num1.length - 1; j >= 0; j--) {
            // total - res[k] might of been filled from the previous result thats why we add it
            let current_total = ((num2[i] * num1[j]) + overflow + res[k])
            // remainder of total - what we will add to the result (16 mod 10 -> 6)
            let result = current_total % 10
            res[k] = result
            // overflow is essentially carrying the "1" forward
            overflow = (current_total - result) / 10
            // move to next item
            k--
        }
        res[k] += overflow
    }
    // check for leading 0's or if the result is just 0's
    for (let i = 0; i < res.length; i++) {
        if (res[i] > 0) {
            res = res.slice(i, res.length)
            break
        }
        if (i === res.length -1 && res[i] === 0) {
            res = ["0"]
        }
    }
    return res.join('') === "00" ? "0" : res.join('')

}

let x = test("9133", "0")
console.log(x)
