const isMatch = function(s, p) {

    if (p.length === 0 && s.length === 0) return true
    if (!s.length && !p.includes("*")) return false
    if (!p.length) return false
    if (p.length === 1 && p[0] === "*") return true

    if (!p.includes("*") && !p.includes("?") && s.length > p.length) {
        return false
    }
    if (!p.includes("*") && p.length < s.length) return false


    let s_index = 0
    for (let i = 0; i < p.length; i++) {

        if (p[i] !== "?" && p[i] !== "*" && p[i] !== s[s_index]) {
            return false
        }

        if (p[i] === "?" && s[s_index] === undefined) {
            return false
        }

        if (p[p.length - 1] !== "*" && p[p.length - 1] !== "?" && s[s.length - 1] !== p[p.length-1]) return false

        // handle the *
        if (p[i] === "*") {


            if (s[s_index - 1] === p[i - 1] && s[s_index] === p[i + 1]) {
                continue
            } else {
                let look_for = p[i + 1]
                if (look_for === "?") {
                    continue
                }
                for (let j = s.length - 1; j >= s_index; j--) {
                   if (s[j] === look_for) {
                       s_index = j - 1
                       break
                   }
                }
            }
        }
        s_index ++
    }


    return true

}

console.log(isMatch("abcaddc", "a*c"))






