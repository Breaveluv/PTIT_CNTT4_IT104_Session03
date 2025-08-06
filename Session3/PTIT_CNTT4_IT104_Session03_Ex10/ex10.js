function isUnique(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}
function findStringLength(str) {
    var words = str.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        if (isUnique(words[i]) && words[i].length > result.length) {
            result = words[i];
        }
    }
    return result;
}
console.log(findStringLength("hello world apple banana orange pumpkin cucumber"));
