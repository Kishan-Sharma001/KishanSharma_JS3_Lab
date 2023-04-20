let inputElem = document. getElementById("city");
inputElem.addEventListener ("keypress", (e) => {
if (e.keyCode == 13) {

fetchWeatherData(e.target.value)
}}
)
function fetchWeatherData(val) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`)
. then(res => res.json())
    
.then((res)=> {
        console.log(res)
        displayResults(res)})
}  
    
    function displayResults(weather){
        let city = document.querySelector(`.city-data .city-name`);
        city.innerHTML=`${weather.name},${weather.sys.country}`;

        let now = new Date();
        let date = document.querySelector(`.city-data .date`);
        date.innerHTML= dateBuilder(now);

        let temp = document.querySelector(`.temp-info .current-temp`);
        temp.innerHTML=`${Math.round(weather.main.temp)} <span> °C</span>`;

        let weath = document.querySelector(`.temp-info .weather`);
       weath.innerHTML=weather.weather[0].main;

        let highlow = document.querySelector(`.temp-info .min-max-temp`);
        highlow.innerHTML=`${Math.round(weather.main.temp_min)}°C /${Math.round(weather.main.temp_max)}°C`;

   }

   function dateBuilder(d){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}<span>,</span> ${date} ${month}  ${year}`;
   }
