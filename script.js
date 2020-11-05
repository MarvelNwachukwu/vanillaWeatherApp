    const input = document.querySelector('#input')
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']

    const cityName = document.querySelector('#cityName');
    const cloudValue = document.querySelector('#cloudValue');
    const humidityValue = document.querySelector('#humidityValue');
    const windValue = document.querySelector('#windValue');
    const tempValue = document.querySelector('#tempValue');
    const visibilityValue = document.querySelector('#visibilityValue');
    const cityTemp = document.querySelector('#cityTemp');
    const pressureValue = document.querySelector('#pressureValue');
    // const seaValue = document.querySelector('#seaValue');

    
    const writeDate = () => {
      const currentDate = new Date();
      const today  = daysOfTheWeek[currentDate.getDay()]
      const thisMonth = months[currentDate.getMonth()];
      const todaysDate = `${currentDate.getHours()}:${currentDate.getMinutes()} - ${today}, ${currentDate.getDate()} ${thisMonth} ${currentDate.getFullYear()}`;
      console.log(todaysDate)
      document.querySelector('#date').innerText = todaysDate
    }

    const getData = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      const inputValue = input.value
      e.preventDefault()
      
      if(inputValue) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=44815469f60369df76644d4289a578de&units=metric`)
        .then(res => { 
            return res.json()
            })
            .then(res => { 
                let cityData = res;
                // console.log(cityData.clouds.all)
                cityName.innerText=cityData.name;
                cloudValue.innerText = cityData.clouds.all + ' Okta';
                humidityValue.innerText = cityData.main.humidity + ' kg-1';
                windValue.innerText = `${cityData.wind.speed} m/s, ${cityData.wind.deg}°`
                tempValue.innerText = cityData.main.temp +'°'
                visibilityValue.innerText = cityData.visibility +'m';
                cityTemp.innerText = cityData.main.temp +'°';
                pressureValue.innerText = cityData.main.pressure + ''; 
                // seaValue.innerText = ;


                inputValue = ''
            })
      }
    })
  }
  

  const callFunctions = () => {
    getData();
    writeDate();
  }
 
  callFunctions()