function isUnique(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}

function findStringLength(str: string): string {
  const words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (isUnique(words[i]) && words[i].length > result.length) {
      result = words[i];
    }
  }

  return result;
}


console.log(findStringLength("hello world apple banana orange pumpkin cucumber"));

