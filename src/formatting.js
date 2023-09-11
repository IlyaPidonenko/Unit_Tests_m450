function getLastElement(array) {
    let lastElement = array[array.length - 1];
    return lastElement;
}

function isPalindrome(word) {
    let upperCaseWord = word.toUpperCase();
    reverseWord = upperCaseWord.split('').reverse().join('');
    if (upperCaseWord === reverseWord) {
        return true
    } else {
        return false
    }
}


function capitalizeWords(string) {
    const words = string.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}
string = "ich mag bananen"
console.log(capitalizeWords(string))

function lengthOfLongestWord(string) {
    words = string.split(' ');
    words.sort((a, b) => b.length - a.length)
    longestWordLength = words[0].length;
    return longestWordLength
}
