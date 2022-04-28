fetch("https://api.nasa.gov/planetary/apod?count=1&api_key=du2pMEDOARGvSXCBakHoHk5KptJBmBDAqJC3vP4w")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('img').src = data[0].url
    document.querySelector('div').innerText = data[0].explanation
  })