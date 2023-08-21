/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let isDuplicate = false;
    
    // Create a map 

    const map = new Map();

    // Loop the array and fill the map

    for(let el of nums) {
        if(map.has(el)) {
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1);
        }
    }

    // Loop the map and check if any elements has a value of more than two

    for(const val of map.values()) {
        if(val > 1) {
            isDuplicate = true;
            break;
        }
    }

    // If so, return true or return false.
    return isDuplicate;
};







