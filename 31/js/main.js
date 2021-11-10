// Sweet Alert Container
let container = document.querySelector(".container");

// Funcition Open Sweet Alert
let btnOpen = document.querySelector(".open");

btnOpen.onclick = () => {
  container.style.display = "block";
};

// Funcition Close Sweet Alert
let btnClose = document.querySelector(".close");

btnClose.onclick = () => {
  container.style.display = "none";
};
