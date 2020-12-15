//Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную
//строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
    let words = string.split('');
    let max = 0;
    let longestWord;

    for (const word of words) {
        let len = word.length;
        if (len > max) {
            max = len;
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // j

console.log(findLongestWord("Google do a roll")); // G

console.log(findLongestWord("May the force be with you")); // f