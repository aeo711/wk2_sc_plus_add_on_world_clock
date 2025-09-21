function updateTime() {
  // Los Angeles Code Block

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesElementDate = document.querySelector("#los-angeles .date");
  let losAngelesElementTime = document.querySelector("#los-angeles .time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesElementDate.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesElementTime.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Paris Code Block

  let parisElement = document.querySelector("#paris");
  let parisElementDate = document.querySelector("#paris .date");
  let parisElementTime = document.querySelector("#paris .time");
  let parisTime = moment().tz("Europe/Paris");
  parisElementDate.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisElementTime.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
    <div>
      <h2>${cityTimeZone}</h2>
      <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
