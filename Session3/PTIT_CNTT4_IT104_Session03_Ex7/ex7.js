function removeDuplicateChars(input) {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        if (!result.includes(input[i])) {
            result += input[i];
        }
    }
    return result;
}
var str1 = "banana";
var str2 = "hello world";
console.log("input: ".concat(str1, ": ").concat(removeDuplicateChars(str1)));
console.log("input: ".concat(str2, ": ").concat(removeDuplicateChars(str2)));
