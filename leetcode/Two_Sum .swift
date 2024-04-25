class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hash:[Int:Int] = [:]

        for (idx, num) in nums.enumerated() {
            let sub = target - num

            if let val = hash[sub] {
                return [val, idx]
            } else {
                hash[num] = idx
            }
        }

        return [0]
    }
}
