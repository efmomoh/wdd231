const weatherKey = "625e320da1dff73739d188728d972a31";
const latitude = "6.32";
const longitude = "-10.81";
const units = "metric";

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${weatherKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${weatherKey}`;


// CURRENT WEATHER
async function getWeather() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

// THREE (3) DAYS FORECAST
async function forecastWeather() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}


getWeather();
forecastWeather();

// DISPLAY CURRENT
function displayResults(data) {
    temp.textContent = `${data.main.temp}°C`;
    feels_like.textContent = `${data.main.feels_like}°C`;
    high.textContent = `${data.main.temp_max}°C`;
    low.textContent = `${data.main.temp_min}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind_speed.textContent = `${data.wind.speed} m/s`;
    condition.textContent = data.weather[0].description;

    const icon = data.weather[0].icon;

    document.querySelector(".weather img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

}


// DISPLAY FORECAST
function displayForecast(data) {
    const container = document.getElementById("forecast-container");

    container.innerHTML = "";

    // Filter one forecast per day (12:00)
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    daily.slice(0, 3).forEach(day => {
        const card = document.createElement("div");
        card.classList.add("forecast-card");
        const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });

        const icon = day.weather[0].icon;

        card.innerHTML = `
            <h3>${date}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="icon">
            <p>${day.main.temp}°C</p>
            <p class="icon-desc">${day.weather[0].description}</p>
        `;
        container.appendChild(card);
    });
}
