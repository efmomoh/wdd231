const weatherKey = "c90713114fb543e78dd232812261803";
const weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=Monrovia&days=3`;

async function loadWeather() {
    const response = await fetch(weatherURL);
    const data = await response.json();

    // --- CURRENT WEATHER ---
    const current = data.current;
    const today = data.forecast.forecastday[0];

    document.getElementById("temp").textContent = `${current.temp_f}°F`;
    document.getElementById("high").textContent = `${today.day.maxtemp_f}°F`;
    document.getElementById("low").textContent = `${today.day.mintemp_f}°F`;
    document.getElementById("humidity").textContent = `${current.humidity}%`;
    document.getElementById("sunrise").textContent = today.astro.sunrise;
    document.getElementById("sunset").textContent = today.astro.sunset;

    const weatherImg = document.querySelector(".weather img");
    weatherImg.src = `https:${current.condition.icon}`;
    weatherImg.alt = current.condition.text;
    document.getElementById("condition").textContent = current.condition.text;

    // --- 3-DAY FORECAST ---
    const forecastContainer = document.getElementById("forecast-container");
    forecastContainer.innerHTML = "";

    data.forecast.forecastday.forEach((day, index) => {
        const dayName = index === 0
            ? "Today"
            : new Date(day.date).toLocaleDateString("en-US", { weekday: "long" });

        const p = document.createElement("p");
        p.innerHTML = `${dayName}: <strong>${day.day.avgtemp_f}°F</strong> - ${day.day.condition.text} 
        <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" style="width:48px; height:48px; vertical-align:middle;">`;

        forecastContainer.appendChild(p);
    });
}

loadWeather();
