let spesa = ["pasta", "carne", "uova", "prosciutto", "aragosta", "melanzana", "mela", "pera", "susina", "cocco", "lampone"];
let col = document.getElementsByClassName("col-12")[0];
let element = [];

let i = 0;
while(i < spesa.length){
    element[i] = document.createElement("div");
    
    element[i].textContent = spesa[i];
    element[i].classList.add("al-element");
    col.appendChild(element[i]);
    i++;
}