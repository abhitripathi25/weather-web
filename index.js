// console.log('hii everyone');

// let API_key = "55219f3d768471872b312c0acdac7f40";

// async function showWeather(){
//     // let latitude = 12.343343;
//     // let longitude = 23.3355;
//     let city = "goa";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
//     const data = await response.json();

//     console.log("weather is this",data);

//    let newPara = document.createElement('p');
//    newPara.textContent = `${data?.main?.temp.toFixed(2)}`

//    document.body.appendChild(newPara);
// }

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log('browser does not support location');
    }
}
 function showPosition(position){
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
    

 }