import Foundation

class Solution {
    func longestConsecutive(_ nums: [Int]) -> Int {

        let numsSet = Set(nums)
        var maxCount = 0

        for el in numsSet {
            guard !numsSet.contains(el-1) else {continue}

            var count = 0
            var num = el

            while numsSet.contains(num) {
                count += 1
                num += 1
            }

            maxCount = max(count, maxCount)
        }

        return maxCount
    }
}
