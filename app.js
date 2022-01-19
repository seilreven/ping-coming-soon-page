const form = document.getElementById("form");
const input = document.getElementById("email");
const btn = document.querySelector("#submit-btn");
const warning = document.querySelector(".warning");
const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.addEventListener("click", function (e) {
  e.preventDefault();

  if (btn.contains(e.target)) {
    if (input.value.match(validEmail)) {
      form.onsubmit();
    } else {
      input.classList.add("red-border");
      warning.classList.add("show-warning");
    }
  } else {
    input.classList.remove("red-border");
    warning.classList.remove("show-warning");
  }
});
