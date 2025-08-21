function caesarCipher(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);
      let base = (code >= 65 && code <= 90) ? 65 : 97;
      return String.fromCharCode(((code - base + shift + 26) % 26) + base);
    }
    return char;
  }).join('');
}

function encodeMessage() {
  let text = document.getElementById("inputText").value;
  let shift = parseInt(document.getElementById("shift").value);
  document.getElementById("outputText").value = caesarCipher(text, shift);
}

function decodeMessage() {
  let text = document.getElementById("inputText").value;
  let shift = parseInt(document.getElementById("shift").value);
  document.getElementById("outputText").value = caesarCipher(text, -shift);
}

function copyText() {
  let output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

function scrollToTool() {
  document.getElementById("tool").scrollIntoView({ behavior: "smooth" });
}

const tips = [
  "Did you know? Julius Caesar used this cipher over 2000 years ago!",
  "Tip: Try shift values other than 3 for fun variations.",
  "Fun fact: This cipher is named after Julius Caesar himself.",
  "Remember: This is for fun, not for real security!"
];
document.getElementById("spyTip").innerText = tips[Math.floor(Math.random() * tips.length)];
