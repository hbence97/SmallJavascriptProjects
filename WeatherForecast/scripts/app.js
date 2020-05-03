const form = document.querySelector(".change-location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".card .time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {

    const { cityDetails, weather } = data;

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    let timeSrc = weather.IsDayTime ? "images/day.svg" : "images/night.svg";
    time.setAttribute("src", timeSrc);

    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);
};

const updateCity = async (city) => {
    
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };
};

form.addEventListener("submit", e => {

    e.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});