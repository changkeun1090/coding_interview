// mine

class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var hash:[Int:Int] = [:]
        var answer:[Int] = []

        for el in nums {
            hash[el, default:0] += 1
        }

        var count = k
        while count > 0 {
            var maxVal = -1
            var maxKey = -1
            for (key, val) in hash {
                if(val > maxVal) {
                    maxKey = key
                    maxVal = val
                }
            }
            answer.append(maxKey)
            hash.removeValue(forKey: maxKey)
            count -= 1
        }

        return answer
    }
}


// bucket sort

class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var dic:[Int:Int] = [:]
        var answer:[Int] = []

        for el in nums {
            dic[el, default:0] += 1
        }

        var bucket = Array<[Int]>(repeating: [], count: nums.count+1)

        for (key, val) in dic {
            bucket[val].append(key)
        }

        for (idx, el) in bucket.enumerated().reversed() {
            guard el.count > 0 else {continue}
            answer += el
            if(answer.count == k) {break}
        }


        return answer
    }
}
