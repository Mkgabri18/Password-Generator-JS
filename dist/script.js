const RESULT = document.querySelector(".generated-result");
const CLIPBOARD = document.querySelector(".clipBoard");
const NUMBERCHECK = document.querySelector("#numbers");
const SYMBOLSCHECK = document.querySelector("#symbols");
const GENERATE = document.querySelector(".generated-button");

// console.log(NUMBERCHECK.checked);

let characters = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "|!()&%$#@+-*/";
let charSelected = "";
let length = 8;

// Checked input from span click
function checkOnClick(e) {
  let isChecked = e.target.previousSibling.checked;
  e.target.previousSibling.checked = isChecked ? false : true;
}

// Prepare char list from check selected
function generateCode() {
  charSelected = characters;
  // add number in char list if checked
  if (NUMBERCHECK.checked) {
    charSelected += number;
  }
  // add symbols in char list if checked
  if (SYMBOLSCHECK.checked) {
    charSelected += symbol;
  }
  // generate ramdom password
  let newCode = generatePassword(charSelected);
  RESULT.value = newCode;
}

function generatePassword(charList) {
  console.log(charList);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  console.log(result);
  return result;
}

function copyToClipboard() {
  RESULT.select();
  document.execCommand("copy");
  console.log("copied");
}