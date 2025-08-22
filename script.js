function normalizeShift(n) {
  if (!Number.isFinite(n)) return 0;
  n = n % 26;
  return n < 0 ? n + 26 : n;
}

function caesarShift(text, rawShift) {
  const shift = normalizeShift(rawShift);
  const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const a = "abcdefghijklmnopqrstuvwxyz";
  let out = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    let idx = A.indexOf(ch);
    if (idx !== -1) {
      out += A[(idx + shift) % 26];
      continue;
    }

    idx = a.indexOf(ch);
    if (idx !== -1) {
      out += a[(idx + shift) % 26];
      continue;
    }

    out += ch;
  }
  return out;
}

function getShiftValue() {
  const v = parseInt(document.getElementById("shift").value, 10);
  return Number.isFinite(v) ? v : 0;
}

function getEls() {
  return {
    inEl: document.getElementById("inputText"),
    outEl: document.getElementById("outputText"),
    tipEl: document.getElementById("spyTip"),
  };
}

function encodeMessage() {
  const { inEl, outEl } = getEls();
  const shift = getShiftValue();
  const source = inEl.value;
  outEl.value = caesarShift(source, shift);
}

function decodeMessage() {
  const { inEl, outEl } = getEls();
  const shift = getShiftValue();

  const source = outEl.value.trim() ? outEl.value : inEl.value;
  outEl.value = caesarShift(source, -shift);
}

function copyText() {
  const { outEl } = getEls();
  if (!outEl.value.trim()) {
    alert("Nothing to copy!");
    return;
  }
  outEl.select();
  outEl.setSelectionRange(0, 99999); // mobile safe
  navigator.clipboard.writeText(outEl.value).then(() => {
    alert("Copied to clipboard!");
  });
}

function useResultAsInput() {
  const { inEl, outEl } = getEls();
  if (!outEl.value.trim()) {
    alert("No result to move!");
    return;
  }
  inEl.value = outEl.value;
  outEl.value = "";
  inEl.focus();
}

const spyTips = [
  "Change your shift number frequently so only your friends know it!",
  "Remember: Caesar Cipher is just for fun, not real security.",
  "Try sending your friends coded jokes or riddles.",
  "Challenge someone to guess your shift without telling them!",
  "Use different shifts for different friends to make it harder.",
  "Spy fact: Julius Caesar used shift 3 for his messages.",
  "Spaces, punctuation, and numbers remain unchanged—use that to your advantage.",
];

function showRandomTip() {
  const { tipEl } = getEls();
  if (!tipEl) return;
  const tip = spyTips[Math.floor(Math.random() * spyTips.length)];
  tipEl.textContent = tip;
}

window.onload = function () {
  showRandomTip();
};
function scrollToTool() {
      const el = document.getElementById('tool');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById('year').textContent = new Date().getFullYear();