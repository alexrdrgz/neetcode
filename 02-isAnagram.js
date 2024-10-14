// Check if two strings are anagrams.
// Returns true if they are anagrams, otherwise false.
// Example: s = "listen", t = "silent" returns true; s = "hello", t = "world" returns false.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let sSort = s.split("").sort().join();
        let tSort = t.split("").sort().join();
        return sSort == tSort
    }
}
