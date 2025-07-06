
const button = document.querySelector(".circle-button");

button.addEventListener("click", () => {
  const day = parseInt(document.getElementById("days").value);
  const month = parseInt(document.getElementById("months").value);
  const year = parseInt(document.getElementById("years").value);

  const errorMessages = document.querySelectorAll(".error-message");
  const errorValid = document.querySelectorAll(".error-valid");
  const error = document.querySelectorAll("#error");

  // Basic validation
  let isValid = true;

  if (!day) {
    errorMessages[0].style.display = "block";
    errorValid[0].style.display = "none";
    error[0].classList.add("error");
    document.getElementById("days").classList.add("error-border");
    isValid = false;
  } else if (day < 1 || day > 31 || typeof day !== "number") {
    errorValid[0].style.display = "block";
    errorMessages[0].style.display = "none";
    error[0].classList.add("error");
    document.getElementById("days").classList.add("error-border");
    isValid = false;
  }

  if (!month) {
    errorMessages[1].style.display = "block";
    errorValid[1].style.display = "none";
    error[1].classList.add("error");
    document.getElementById("months").classList.add("error-border");
    isValid = false;
  } else if (month <= 1 || month >= 13) {
    errorValid[1].style.display = "block";
    errorMessages[1].style.display = "none";
    error[1].classList.add("error");
    document.getElementById("months").classList.add("error-border");
    isValid = false;
  }

  if (!year) {
    errorMessages[2].style.display = "block";
    errorValid[2].style.display = "none";
    error[2].classList.add("error");

    document.getElementById("years").classList.add("error-border");


    isValid = false;
  } else if (year > new Date().getFullYear()) {
    errorValid[2].style.display = "block";
    errorMessages[2].style.display = "none";
    error[2].classList.add("error");
    document.getElementById("years").classList.add("error-border");

    isValid = false;
  }

  if (!isValid) return;

  // Calculate Age
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += prevMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const dayShow = document.querySelector("#day");
  dayShow.innerText = ageDays;
  const monthShow = document.querySelector("#month");
  monthShow.innerText = ageMonths;
  const yearShow = document.querySelector("#year");
  yearShow.innerText = ageYears;

  if (dayShow !== "") {
    // If span has text, hide the error
    error.forEach((val) => {
      val.classList.remove("error");
    })
    errorMessages.forEach((val) => {
      val.style.display = "none";
    })
    errorValid.forEach((val) => {
      val.style.display = "none";
    })
    document.getElementById("days").classList.remove("error-border");
    document.getElementById("months").classList.remove("error-border");
    document.getElementById("years").classList.remove("error-border");
  }
});
