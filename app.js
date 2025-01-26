let valueSearch = document.getElementById('ValueSearch');
let city = document.getElementById('city');
let temprature = document.getElementById('temp');
let feelLike = document.getElementById('feelLike');
let desc = document.getElementById('desc');
let form = document.querySelector('form');
let cloud = document.getElementById('cloud');
let rain = document.getElementById('rain');
let pressure = document.getElementById('pressure');
let card = document.querySelector('.card');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(valueSearch.value != ''){
		searchWeather();
	}
})
let id = '59b55123881a885da7fa465235ae735e';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
	fetch(url + '&q=' + valueSearch.value)
	.then(responsive => responsive.json())
	.then(data => {
		console.log(data);
		if(data.cod == 200){
			city.querySelector('figcaption').innerText = data.name;
			city.querySelector('img').src= 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
			temprature.querySelector('img').src= 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
			temprature.querySelector('figcaption span').innerText = data.main.temp;
			feelLike.innerHTML = 'Feels like ' +data.main.feels_like+'<sup>o</sup><br>Min '+data.main.temp_min+'<sup>o</sup> Max '+data.main.temp_max+'<sup>o</sup>';
			desc.innerText = data.weather[0].description;
			cloud.innerText = data.clouds.all;
			rain.innerText = data.main.humidity;
			pressure.innerText = data.main.pressure;
		}else{
			card.classList.add('error');
			setTimeout(() => {
				card.classList.remove('error');
			}, 1000);
		}
		valueSearch.value = '';
	})
}
const initApp = () => {
	valueSearch.value = 'Evesham';
	searchWeather();
}
initApp();