// http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=44815469f60369df76644d4289a578de&units=metric
const formSubmitted = (e) => { 
    e.preventDefault();
    if(document.getElementById('cityname').value) {
      let inputValue = document.getElementById('cityname').value;
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=44815469f60369df76644d4289a578de&units=metric`) 
      .then(res => { 
      return res.json()
      })
      .then(res => { 
          let lagosData = res;
          console.log(lagosData)
      })
    }
  }

let form = document.getElementById('form');

form.addEventListener('submit', formSubmitted)

let APIdata;

    // console.log(APIdata)
