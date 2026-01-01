/**
 * Anagram: An anagram of a string is another string that contains same characters, 
 * only the order of characters can be different.=
 */

/**
 * Input:
'prashant'
'tnahsarp'

'learnersbucket'
'tekcubsrenraes'

Output:
true
false
 */

export function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    const frequency = {}

    for (const char of str1) {
        frequency[char] = (frequency[char] || 0) + 1
    }

    for (const char2 of str1) {
        if (!frequency[char2]) return false
        frequency[char2] = frequency[char2] - 1
    }

    return true
}