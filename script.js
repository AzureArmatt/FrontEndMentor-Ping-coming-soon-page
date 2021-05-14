const inputSelector = document.querySelector(".page__form--input");
const notificationSelector = document.querySelector(
  ".page__form--notification"
);
const btnSelector = document.querySelector(".page__form--btn");

btnSelector.addEventListener("click", function (e) {
  e.preventDefault();
  const email = inputSelector.value;
  if (email == "") {
    notificationSelector.innerHTML =
      "Whoops! It looks like you forgot to add your email";
    notificationSelector.style.visibility = "visible";
    inputSelector.style.borderColor = "#ff5263";
    return;
  }
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!reg.test(email)) {
    notificationSelector.innerHTML = "Please provide a valid email address";
    notificationSelector.style.visibility = "visible";
    inputSelector.style.borderColor = "#ff5263";
    return;
  }
  inputSelector.style.borderColor = "#c2d3ff";
  notificationSelector.style.visibility = "hidden";
});
