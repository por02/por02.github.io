const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const search = document.querySelector(".search");

let active = 0;

btn.addEventListener("click", () => {
  runActive();
});

function runActive() {
  if (!active) {
    active = 1;
    search.classList.add("active");
  } else {
    active = 0;
    search.classList.remove("active");
  }
}
