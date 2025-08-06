function removeDuplicateChars (input: string): string{
    let result= "";
    for (let i = 0; i < input.length; i++) {
       if(!result.includes(input[i])){
        result+=input[i];
       }
        
    }
    return result;
}
let str1 = "banana";
let str2 = "hello world";
console.log(`input: ${str1}: ${removeDuplicateChars(str1)}`);
console.log(`input: ${str2}: ${removeDuplicateChars(str2)}`);

