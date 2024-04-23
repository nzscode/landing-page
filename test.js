let button1 = document.querySelector("#button1");
let banner1 = document.querySelector("#banner1");
let unorderedList = document.querySelector("#unordered_list");
console.log(unorderedList.innerText);
console.log(unorderedList.innerHTML);
button1.addEventListener("click", printHello);
function printHello() {
    button1.innerText = "Button was clicked";
}
