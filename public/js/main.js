const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')

const temp_val = document.getElementById('temp_val')
const temp_status = document.getElementById('temp_status')
const submitBtn = document.getElementById('submitBtn')

const datahide = document.querySelector('.middle_layer');


const Info = async(event)=> {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal ==  ""){
        city_name.innerText = `Plese write The Name Before Search`
        datahide.classList.add('data_hide');
    }else{
        try {
            let url = `https://api.weatherapi.com/v1/current.json?key=17fbafc8cb784743851123741211508&q=${cityVal}&aqi=no`
            const response = await fetch(url);
            const Data = await response.json();
            const arrData = [Data];
            city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}`;
            temp_val.innerText = `${arrData[0].current.temp_c}`;
            // console.log(arrData[0].current.temp_c)

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Plese enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }

   }
   submitBtn.addEventListener("click", Info)