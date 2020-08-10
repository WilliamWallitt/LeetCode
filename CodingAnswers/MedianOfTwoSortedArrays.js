const findMedianSortedArrays = function(nums1, nums2) {

    let arr = [...nums1, ...nums2].sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        else return 0
    })
    if (arr.length % 2 !== 0) {
        return arr[(arr.length - 1) / 2]
    }
    else {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    }
}

findMedianSortedArrays([3], [-2, -1])
