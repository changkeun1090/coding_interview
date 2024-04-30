// - N^2 대신 NlogN의 시간복잡도로 풀기

class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var hashArr: [String: [String]] = [:]

        for str in strs {
            let sortedStr = String(str.sorted())
            hashArr[sortedStr, default: []].append(str)
        }
        
        return Array(hashArr.values)
    }
}

