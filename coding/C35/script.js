document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '9989d8bea581de020dde27050e4838eb'; //9989d8bea581de020dde27050e4838eb
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherInfo').innerText = error.message;
    }
}

function displayWeather(data) {
    const {
        main,
        weather
    } = data;
    const temperature = main.temp;
    const condition = weather[0].description;
    const icon = weather[0].icon;

    document.getElementById('weatherInfo').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Condition: ${condition}</p>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${condition}">
            `;
}