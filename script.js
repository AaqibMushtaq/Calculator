let Nine = document.querySelector(".nine");
let input = document.querySelector(".text");
Nine.onclick = () => {
  console.log("Nine");
  input.value += "9";
};

let eight = document.querySelector(".eight");
eight.onclick = () => {
  input.value += "8";
};
let seven = document.querySelector(".seven");
seven.onclick = () => {
  input.value += "7";
};
let six = document.querySelector(".six");
six.onclick = () => {
  input.value += "6";
};
let five = document.querySelector(".five");
five.onclick = () => {
  input.value += "5";
};
let four = document.querySelector(".four");
four.onclick = () => {
  input.value += "4";
};
let three = document.querySelector(".three");
three.onclick = () => {
  input.value += "3";
};
let two = document.querySelector(".two");
two.onclick = () => {
  input.value += "2";
};
let one = document.querySelector(".one");
one.onclick = () => {
  input.value += "1";
};
let zero = document.querySelector(".zero");
zero.onclick = () => {
  input.value += "0";
};
let ac = document.querySelector(".ac");
ac.onclick = () => {
  input.value = "";
};
let plus = document.querySelector(".plus");
plus.onclick = () => {
  input.value += "+";
};
let equalTo = document.querySelector(".equalto");
equalTo.onclick = () => {
  input.value = eval(input.value);
};
let divide = document.querySelector(".divide");
divide.onclick = () => {
  input.value += "/";
};
let multiple = document.querySelector(".multiple");
multiple.onclick = () => {
  input.value += "*";
};
let minus = document.querySelector(".minus");
minus.onclick = () => {
  input.value += "-";
};
let del = document.querySelector(".del");
del.onclick = () => {
  input.value = input.value.slice(0, -1);
};
let percent = document.querySelector(".percent");
percent.onclick = () => {
  input.value += "/100";
};
let doubleZero = document.querySelector(".doublezero");
doubleZero.onclick = () => {
  input.value += "00";
};
let dot = document.querySelector(".dot");
dot.onclick = () => {
  input.value += ".";
};
