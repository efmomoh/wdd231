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
    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const high = document.getElementById('high');
    const low = document.getElementById('low');
    const humidity = document.getElementById('humidity');
    const wind_speed = document.getElementById('wind_speed');
    const condition = document.getElementById('condition');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    temp.textContent = `${Math.round(data.main.temp)}°C`;
    feels_like.textContent = `${Math.round(data.main.feels_like)}°C`;
    high.textContent = `${Math.round(data.main.temp_max)}°C`;
    low.textContent = `${Math.round(data.main.temp_min)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind_speed.textContent = `${data.wind.speed} m/s`;
    condition.textContent = data.weather[0].description;

    const icon = data.weather[0].icon;

    document.querySelector(".weather img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}


// DISPLAY FORECAST
function displayForecast(data) {
    const container = document.getElementById("forecast-container");

    // Set the city name in the header
    document.getElementById("city").textContent = `${data.city.name}, ${data.city.country}`;

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
