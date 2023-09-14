const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require("./formatting.js")

test("shows the last element of an array", () => {
    input = [1, 2, 3, 4, 5];
    expect(getLastElement(input)).toBe(5);
})

test("looks if the word is a palindrome", () => {
    expect(isPalindrome("Anna")).toBe(true);
})

test("capitalizes the words", () => {
    input = "ich mag bananen";
    expect(capitalizeWords(input)).toBe("Ich Mag Bananen");
})

test("shows the char amount of the longest word", () => {
    input = "Ich mag Bananen";
    expect(lengthOfLongestWord(input)).toBe(7);
})