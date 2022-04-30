let randYear = () => 2022-(Math.floor(Math.random()*11))

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${randYear()}-09-12&api_key=du2pMEDOARGvSXCBakHoHk5KptJBmBDAqJC3vP4w`
fetch(url)
.then(res => res.json())
.then(data => {
    /* console.log(randPhotoIndex)*/
    console.log(data.photos)
    if (data.photos.length>0) {        
        let randPhotoIndex = Math.floor(Math.random()*data.photos.length-1)
        let roverName = data.photos[randPhotoIndex].rover.name
        let date = data.photos[randPhotoIndex].earth_date
        document.querySelector('img').src = data.photos[randPhotoIndex].img_src;
        document.querySelector('h3').innerText = `Photo taken by ${roverName} on ${date}`
    }
    else {window.location.reload()}    
})
.catch(err => {
    console.log(`error ${err}`)
})