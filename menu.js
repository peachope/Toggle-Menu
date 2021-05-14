const menuLeft = document.querySelector(".menu-left");
const menuRight = document.querySelector(".menu-right");

menuLeft.addEventListener("click", (e) => {
  let menuChild2 = document.querySelector("#mn-r");
  let menuChild = document.querySelector("#mn-l");

  menuChild2.classList.remove("visible");
  menuChild.classList.toggle("visible");
});

menuRight.addEventListener("click", (e) => {
  let menuChild2 = document.querySelector("#mn-r");
  let menuChild = document.querySelector("#mn-l");

  menuChild.classList.remove("visible");
  menuChild2.classList.toggle("visible");
});
