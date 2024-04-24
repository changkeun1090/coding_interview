class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {

        guard s.count == t.count else { return false }

        var dic = [Character: Int]()

        for char in s {
            dic[char, default:0] += 1
        }

        for char in t {
            if let count = dic[char], count > 0 {
                dic[char] = count - 1
            } else {
                return false
            }
         }

        return true
    }
}
