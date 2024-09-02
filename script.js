const cityInput = document.getElementById("input-city");
const cityToUpdate = document.getElementById("city-name");
const dateToUpdate = document.getElementById("date");
const maxTempToUpdate = document.getElementById("max-temp");
const minTempToUpdate = document.getElementById("min-temp");
const submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = handleButtonClick;

function handleButtonClick() {
    const city = cityInput.value;

    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=YFPJKFT4UGEYSR43AN4B6ZK9V&contentType=json`
    )
        .then((res) => res.json())
        .then((data) => {
            const weather = data.days[0];
            cityToUpdate.innerText = data.address;
            dateToUpdate.innerText = weather.datetime;
            maxTempToUpdate.innerText = weather.tempmax;
            minTempToUpdate.innerText = weather.tempmin;
        })
        .catch((err) => console.log(err));
}
