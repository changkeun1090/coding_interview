class Solution1 {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        
        var uniqueNumbersSet = Set<Int>()

        for el in nums {
            if uniqueNumbersSet.contains(el) {
                return true;
            }
            uniqueNumbersSet.insert(el)
        }
        
        return false
    }
}

class Solution2 {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        nums.count != Set(nums).count
    }
}
