//click toggle effect

//select element function
//A Query selector function that will be called to select elements
const selectElement = element => {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

//adding a listerner
menuToggler.addEventListener("click", function() {
  body.classList.toggle("open");
});
