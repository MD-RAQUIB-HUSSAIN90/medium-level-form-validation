// Form validation....................

let form = document.querySelector("form");
let userName = document.querySelector("#username");
let contact = document.querySelector("#contact");
let password = document.querySelector("#password");
let reEnterPassword = document.querySelector("#reEnterPassword");
let small = document.querySelectorAll("small");
let h5 = document.querySelector("h5");
let h4 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numRegex = /^\d{10}$/;
  const userRegex = /^[A-Z][a-zA-Z]*$/;
  small.forEach((item) => {
    item.style.display = "none";
  });
  h5.style.display = "none";
  if (
    userName.value.trim() === "" ||
    contact.value.trim() === "" ||
    password.value.trim() === "" ||
    reEnterPassword.value.trim() === ""
  ) {
    h5.textContent = "Please fill all fields";
    h5.classList.add("emptyAllField");
    h5.style.display = "initial";
  } else if (!userRegex.test(userName.value)) {
    small[0].style.display = "initial";
  } else if (!numRegex.test(contact.value)) {
    small[1].style.display = "initial";
  } else if (password.value !== reEnterPassword.value) {
    small[2].style.display = "initial";
  } else {
    small[0].style.display = "none";
    small[1].style.display = "none";
    small[2].style.display = "none";
    userName.value = "";
    contact.value = "";
    password.value = "";
    reEnterPassword.value = "";
    h4.textContent = "Your data successfully submited";
    h4.classList.add("successMessage")
  }
});
