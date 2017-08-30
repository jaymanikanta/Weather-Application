// Get Weather Function

function getWeather() {
    // Initialize weather variables
    var weather = new XMLHttpRequest();
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    // Assign custom city, state values to weather API via inputs
    var weatherString = 'http://api.wunderground.com/api/YOUR_API_KEY/conditions/q/' + state + '/' + city + '.json';
    weather.open('GET', weatherString, false);
    weather.send(null);
    // Parsing the response JSON object and getting the required weather data - assigning them to variables
    var resp = JSON.parse(weather.response);
    var display = resp.current_observation.display_location.full + '<br />';
    var temp = resp.current_observation.temperature_string + '<br />';
    var wind = resp.current_observation.wind_string + '<br />';
    var icon = '<img src="' + resp.current_observation.icon_url + '" alt="Weather Icon" width=100px>' + '<br />';
    var stat = resp.current_observation.icon + '<br />';
    // Adding the data that is fetched from API to HTML for displaying on mainscreen
    document.getElementById('stat').innerHTML = stat;
    document.getElementById('icon').innerHTML = icon;
    document.getElementById("weather").innerHTML = display;
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('wind').innerHTML = wind;
}
