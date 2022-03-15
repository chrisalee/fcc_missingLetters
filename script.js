// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strStartIndex = alphabet.indexOf(str[0]);
  // console.log(str[0]);
  // console.log(strStartIndex);
  for(let i = 0; i < str.length; i++) {
    // console.log(strStartIndex + i, alphabet.indexOf(str[i]));
    if(i + strStartIndex !== alphabet.indexOf(str[i])) {
      return alphabet[alphabet.indexOf(str[i]) - 1];
    } else {
      continue;
    }
  }
 
}

fearNotLetter("abce");
