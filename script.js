    const input = document.querySelector('#input')
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const topCities = document.querySelectorAll('.topCities')

    const cityName = document.querySelector('#cityName');
    const cloudValue = document.querySelector('#cloudValue');
    const humidityValue = document.querySelector('#humidityValue');
    const windValue = document.querySelector('#windValue');
    const tempValue = document.querySelector('#tempValue');
    const visibilityValue = document.querySelector('#visibilityValue');
    const cityTemp = document.querySelector('#cityTemp');
    const pressureValue = document.querySelector('#pressureValue');
    const weatherValue = document.querySelector('#weatherValue');
    const weatherIcon = document.querySelector('#weatherIcon');
    const form = document.querySelector('form');
    const writeDate = () => {
      const currentDate = new Date();
      const today = daysOfTheWeek[currentDate.getDay()]
      const thisMonth = months[currentDate.getMonth()];
      const todaysDate = `${currentDate.getHours()}:${currentDate.getMinutes()} - ${today}, ${currentDate.getDate()} ${thisMonth} ${currentDate.getFullYear()}`;
      console.log(todaysDate)
      document.querySelector('#date').innerText = todaysDate
    }

    const getData = () => {
      form.addEventListener('submit', (e) => {
        const inputValue = input.value
        // console.log(`${inputValue} works`)
        e.preventDefault()

        if (inputValue) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=44815469f60369df76644d4289a578de&units=metric`)
            .then(res => {
              return res.json()
            })
            .then(res => {
              let cityData = res;
              cityName.innerText = cityData.name;
              cloudValue.innerText = cityData.clouds.all + ' Okta';
              humidityValue.innerText = cityData.main.humidity + ' kg-1';
              windValue.innerText = `${cityData.wind.speed} m/s, ${cityData.wind.deg}°`
              tempValue.innerText = cityData.main.temp + '°'
              visibilityValue.innerText = cityData.visibility + 'm';
              cityTemp.innerText = cityData.main.temp + '°';
              pressureValue.innerText = cityData.main.pressure + '';
              weatherValue.innerText = cityData.weather[0].main;
              const cityWeather = cityData.weather[0];
            })
        }
      })
    }

    // Check for changes periodically

    form.addEventListener('submit', e => {
      setInterval(() => {
        getData();
        console.log('Refreshed')
      }, 300000);
    })

    topCities.forEach(i => {
      i.addEventListener('click', e => {
        // console.log(i.innerText)
        input.value = i.innerHTML
        // getData()
      })
    })


    const callFunctions = () => {
      getData();
      writeDate();
    }

    callFunctions()

    // console.log(topCities)
