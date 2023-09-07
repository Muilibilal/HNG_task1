// Selectors
const timeEl = document.querySelector("[data-testid='currentUTCTime'] span");
const dayEl = document.querySelector(
  "[data-testid='currentDayOfTheWeek'] span"
);
const imgCont = document.querySelector(".profile-logo");
const loaderEl = document.querySelector(".profile-logo span");
const imageEl = document.querySelector(".profile-logo img");

// Intl Date format
let formatting = (options) => {
  return new Intl.DateTimeFormat("en-US", options).format(new Date());
};

function removeLoader() {
  imgCont.style.display = "flex";
  imageEl.style.display = "flex";
  loaderEl.style.display = "none";
}

setInterval(() => {
  timeEl.innerText = new Date().getTime();
}, 1000);

dayEl.innerText = formatting({
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

imageEl.addEventListener("load", () => {
  removeLoader();
});
