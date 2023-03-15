const API_KEY = '1aba17bbe403307b794ac53bb624b7a8'

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            // console.log(data.name, data.weather[0].main, data.main.temp)
            const weather = document.querySelector("#weather");
            const city = document.querySelector("#city");
            const temp = document.querySelector('#temp');

            city.innerText= data.name;
            weather.innerText = data.weather[0].main;
            temp.innerText = String(data.main.temp) + '°C';

        })
        .catch(error => console.log(error));

        // const fetchedData = fetch(url)
        // .then((response) => response.json())
        
        // console.log(fetchedData);
        
        // city.innerText= fetchedData.data.name;
        
};

const onGeoError = () => {
    alert("can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);