let output = document.querySelector(".output");
let oneBtn = document.querySelector(".one")
let twoBtn = document.querySelector("two");
let threeBtn = document.querySelector(".three")
let fourBtn = document.querySelector(".four")
let fiveBtn = document.querySelector(".five")
let sixBtn = document.querySelector(".six")
let sevenBtn = document.querySelector(".seven")
let eightBtn = document.querySelector(".eight")
let nineBtn = document.querySelector(".nine")
let bolBtn = document.querySelector(".bol")
let kopBtn = document.querySelector(".kop")
let ayrBtn = document.querySelector(".ayr")
let tengBtn = document.querySelector(".teng")
let plusBtn = document.querySelector(".plus")
let clrBtn = document.querySelector(".clr")




oneBtn.addEventListener('click', subNumber)
threeBtn.addEventListener('click', subNumber)
fourBtn.addEventListener('click', subNumber)
fiveBtn.addEventListener('click', subNumber)
sixBtn.addEventListener('click', subNumber)
sevenBtn.addEventListener('click', subNumber)
eightBtn.addEventListener('click', subNumber)
nineBtn.addEventListener('click', subNumber)
plusBtn.addEventListener('click', subNumber)
ayrBtn.addEventListener('click', subNumber)
kopBtn.addEventListener('click', subNumber)
bolBtn.addEventListener('click', subNumber)
oneBtn.addEventListener('click', subNumber)
oneBtn.addEventListener('click', subNumber)


function subNumber (e) {
    output.innerHTML += e.target.value 
 }
 clr.addEventListener('click', () => {
     output.innerHTML = " "
 })
 teng.addEventListener('click', natija)
 
 function natija() {
     let resul = (eval(output.textContent));
     output.textContent = resul
 }