document.addEventListener('DOMContentLoaded', () => {
    console.log('remake the whole project later');
    const apiKey = '644ef4d0b0afefb9a45b514d6d91c3ae';
    const btn = document.getElementById('search');

    btn.addEventListener('click', function getWeather() {
        const city = document.getElementById('city').value;

        if (!city) {
            alert('wrong city name');
            return;
        }

        const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(currentURL)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('error fetching data: ', error);
                alert('Error fetching current weather data. Please try again.');
            })
    })


    function displayWeather(data) {
        //select html boxes
        const tempDiv = document.getElementById('temp');
        const weatherDiv = document.querySelector('#weather-info');

        //clear all
        tempDiv.innerHTML = '';
        weatherDiv.innerHTML = '';

        //error check
        if (data.cod === '404') {
            weatherDiv.innerHTML = `<p>${data.message}</p>`;
        }
        else {
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.16);
            const description = data.weather[0].description;

            //html
            const tempHTML = `<p>${temperature} degrees C</p>`;

            const weatherHTML = `
                <p>city: ${cityName}</p>
                <p>info: ${description}</p>
            `;

            //set html
            tempDiv.innerHTML = tempHTML;
            weatherDiv.innerHTML = weatherHTML;
        }
    }
});