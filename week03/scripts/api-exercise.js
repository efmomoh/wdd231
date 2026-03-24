// API EXERCISE 
const currentTemperature = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const FigCaptionDescription = document.querySelector("figcaption");

// API KEY: 49.7500468819332, 6.637010217773472
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metrics&appid=625e320da1dff73739d188728d972a31";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
    }

}
apiFetch();

function displayResults(data) {
    currentTemperature.textContent = `${data.main.temp}°F`;
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    FigCaptionDescription.textContent = data.weather[0].description;
}
