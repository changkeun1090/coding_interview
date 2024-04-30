class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        
        var pre = 1
        var post = 1
        var answer = Array(repeating: 1, count: nums.count)

        for i in 0..<nums.count {
            answer[i] *= pre
            pre *= nums[i]
        }

        for i in (0..<nums.count).reversed() {
            answer[i] *= post
            post *= nums[i]
        }

        return answer
    }
}
