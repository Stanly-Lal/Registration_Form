let curTime = document.querySelector("#current-time");
let toggleCont = document.querySelector("#toggle-container");
let toggleBtn = document.querySelector(".light-mode");
let body = document.querySelector("body");
let secCont = document.querySelector(".secondry-container");
let timeContainer = document.querySelector(".time-container");
let nameLabel = document.querySelector("#name-label");
let emailLabel = document.querySelector("#email-label");
let phoneLabel = document.querySelector("#phone-label");
let footer = document.querySelector(".footer");



// LIGHT MODE-DARK MODE LOGIC############################
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
  toggleCont.style.backgroundColor = "#121212";
  toggleBtn.classList.toggle("dark-mode");
  secCont.style.backgroundColor = "rgb(74, 93, 122";
  secCont.style.color = "aliceblue";
  toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  timeContainer.style.backgroundColor = "rgb(133, 132, 132)";
  nameLabel.style.color = "white";
  emailLabel.style.color = "white";
  phoneLabel.style.color = "white";
  secCont.style.boxShadow = "none";
  footer.style.color = "white";
  footer.style.backgroundColor = "#121212";
}

toggleCont.addEventListener("click", () => {
  toggleCont.style.backgroundColor = "#121212";
  toggleBtn.classList.toggle("dark-mode");
  body.classList.toggle("dark");
  secCont.style.backgroundColor = "rgb(74, 93, 122";
  secCont.style.color = "aliceblue";
  toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  toggleBtn.style.textShadow = "green";
  timeContainer.style.backgroundColor = "rgb(133, 132, 132)";
  nameLabel.style.color = "white";
  emailLabel.style.color = "white";
  phoneLabel.style.color = "white";
  secCont.style.boxShadow = "none";
  footer.style.color = "white";
  footer.style.backgroundColor = "#121212";

  let pageMode = localStorage.getItem("mode");
  if (pageMode === "light" || pageMode === null) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun">`;
    timeContainer.style.backgroundColor = "rgb(236, 234, 234)";
    toggleCont.style.backgroundColor = "white";
    secCont.style.backgroundColor = "aliceblue";
    nameLabel.style.color = "black";
    emailLabel.style.color = "black";
    phoneLabel.style.color = "black";
    secCont.style.boxShadow = "0 0 10px 4px grey";
    footer.style.color = "black";
    footer.style.backgroundColor = "white";
  }
});

// CURRENT TIME HEADER LOGIC###########################
// setInterval(function showTime() {
//     let currentTime = new Date();
//     let time = `Current Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
//     curTime.innerText = time;
// },1000);

setInterval(function changeTimeFormat() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Check whether AM or PM
  let newformat = hours >= 12 ? "pm" : "am";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  curTime.innerText =
    "Current Time:" +
    " " +
    (hours + ":" + minutes + ":" + seconds + " " + newformat);
}, 1000);

// FORM_DATA LOGIC STARTS HERE##############################
let url =
  "https://script.google.com/macros/s/AKfycbzd3k3LJtFwLhOtFMizBZM3JPxx4L_uhLIVV3XdX27etKfHpMMstAb692gwQYD6UScX/exec";
let form = document.querySelector("#form-container");

form.addEventListener("submit", (e) => {
  e.target.btn.innerHTML = "Submitting...";
  let formInfo = new FormData(form);
  fetch(url, {
    method: "POST",
    body: formInfo,
  })
    .then((res) => res.text())
    .then((finalRes) => {
      e.target.btn.innerHTML = "Submit";
      document.getElementById("res").innerHTML = finalRes;
      form.reset();
      setTimeout(() => {
        document.getElementById("res").innerHTML = "";
      }, 2000);
    });
  e.preventDefault();
});
