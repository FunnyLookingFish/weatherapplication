console.log("This is loaded. You are doing great. Keep up the good work."); 

const apiKey = "db0bb7248127276eb81a6477403f139b";
const apiUrl = "";
const temp = document.getElementById("#temp");
const searchCity = document.querySelector("#searchCity");
const city = "";
const searchButton = document.getElementById("#searchButton")
const currentDate = moment().format('L');

$("#current-date").text("(" + currentDate + ")");

for (let i = 0; i < localStorage.length; i++) {
    const city = localStorage.getItem(i);
    const cityName = document.querySelector(".list").addClass(".listItem");

    cityName.append("<li>" + city + "</li>");
}

searchButton.onclick(function (event) {
    const searchInput = $(".searchInput").val();
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`
    const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?${searchInput}&appid=${apiKey}`
    const uvUrl = `https://api.openweathermap.org/data/3.0/onecall?${searchInput}&exclude={part}&appid=${apiKey}`

    event.preventDefault();

    fetch(currentUrl).then(function(response){
        return response.json();
        
    }) 
    .then(function(data{
        console.log(data);
    }));
});
/*
// current weather
function currentTemp() {};

// getWeather function
function getWeather(data){};

// Search History
function searchHistory() {};

// Get coordinates function
function getCoordinates() {};

// Clear history function
function clearHistory() {};

// Clear current search function
function clearCurrent() {};

// Submit city name form submit function
function cityFormSubmit() {};

// Previous city updated search
function previousCity() {};
*/