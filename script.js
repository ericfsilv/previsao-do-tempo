

const key = "e9ca2a3d5c740c210cbfbfe3986f4958"

function showData(data) {
    console.log(data)

    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C" 
    document.querySelector(".descricao").innerHTML = data.weather[0].description 
    document.querySelector(".umidade").innerHTML = Math.floor(data.main.humidity) + "%" 
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(cidade) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    showData(data)
    console.log(data)
}
11
function buttonInput() {
    const cidade = document.querySelector(".input-cid").value

    searchCity(cidade)
}