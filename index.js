

function calculate() {
    
let n = document.getElementById("number").value;
console.log(n);


let m = document.getElementById("lgth-num");
console.log(m);

let f = document.getElementById("feet");
let mtf = document.getElementById("lgth-feet");
let ftm = document.getElementById("meters");

let wM = document.getElementById("wone");
 let wF= document.getElementById("wtwo");
let wMtf = document.getElementById("wthree");
let wFtm = document.getElementById("wfour");

let mK = document.getElementById("mone");
let mP = document.getElementById("mtwo");
let mKp = document.getElementById("mthree");
let mPk = document.getElementById("mfour");




// let n = document.getElementById("number").value;
// console.log(n);


// let m = document.getElementById("lgth-num");
// console.log(m);
m.innerText = n;
f.textContent = n;
mtf.textContent = (n * 3.28084).toFixed(3);
ftm.textContent = (n / 3.28084).toFixed(3);


wM.textContent = n;
wF.textContent = (n / 4.546).toFixed(3);
wMtf.textContent = n;
wFtm.textContent = (n * 4.546).toFixed(3);

mK.textContent = n;
mP.textContent = (n * 2.205).toFixed(3);
mKp.textContent = n;
mPk.textContent = (n / 2.205).toFixed(3);


}


// console.log(number);
// console.log(meters);
// console.log(feet);
// console.log(mettoft);
