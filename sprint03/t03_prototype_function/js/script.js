String.prototype.removeDuplicates = function () {
    let cleanedString = this.trim().replace(/\s+/g, ' ');
    let words = cleanedString.split(' ');
    let uniqueWords = words.filter((word, index) => words.indexOf(word) === index);
    let result = uniqueWords.join(' ');

    return result;
}