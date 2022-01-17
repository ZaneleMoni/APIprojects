let word = document.querySelector("#text").innerHTML;
const chars = word.split("");

let randomIndex = Math.round(Math.random() * chars.length);
chars[randomIndex] = chars[randomIndex].toUpperCase();

document.querySelector("#text").innerHTML = chars.join("");
