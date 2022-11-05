// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    let lowerCaseInput = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let encodeMessage = "";
    let decodeMessage = "";

    for (let i = 0; i < lowerCaseInput.length; i++) {
      let currentLetter = lowerCaseInput[i];
      if (alphabet.indexOf(currentLetter) < 0) {
        encodeMessage += currentLetter;
        continue;
      }

      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex;
      newIndex = currentIndex + shift;
      if (newIndex > 26) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;

      encodeMessage += alphabet[newIndex];
    }

    if (encode === false) {
      let reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba".split("");
      return reverseAlphabet;
    }
    return encodeMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
