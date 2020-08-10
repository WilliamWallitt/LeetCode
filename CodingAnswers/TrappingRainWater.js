const trap = function(height) {
    let res = 0
    for (let i = 0; i < height.length - 1; i++) {
        // left and right are the item in the arr
        let left = height[i]
        for (let j = 0; j < i; j++) {
            // find max elem on it's left
            left = Math.max(left, height[j])
        }
        let right = height[i]
        for (let j = i + 1; j < height.length; j++) {
            // find it max elem on it's right
            right = Math.max(right, height[j])
        }
        console.log("left", left , height[i], "right", right)
        // find the lowest one and minus the height from it
        res += Math.min(left, right) - height[i]
    }

    return res

}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
