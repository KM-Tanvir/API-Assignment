function search(){
    let name =document.getElementById("nameBox").value ;

    let url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => search2(data));
}
function search2(data){
    let disArea = document.getElementById("dis");
    disArea.textContent =" ";
    let disArea2= document.getElementById("dis2");
    disArea2.textContent= "";
    for( let i = 1; i <= data.length;i++){
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Capital = ${data[i-1].capital}<br> Population = ${data[i-1].population} <br><br> Flag <br><br> <img src="${data[i-1].flags.png}">  <br><br>  <button onclick="find()">See more</button>`;
        newDiv.classList.add("style");
        disArea.appendChild(newDiv);

    }
    

}

function find(){
    let country = document.getElementById("nameBox").value;

    let url2 = `http://api.weatherapi.com/v1/current.json?key=411656b57465492b81485708240312&q=${country}&aqi=no`;
    fetch(url2)
    .then(res2 => res2.json())
    .then(data2 => find2(data2));

}

function find2(data2){
    let disArea2= document.getElementById("dis2");
    disArea2.textContent =" ";
    let newDiv2= document.createElement("div");
    newDiv2.innerHTML = `Name : ${data2.location.name} <br> Current temp : ${data2.current.temp_c}  \u00B0C <img src="${data2.current.condition.icon}">`;

    newDiv2.classList.add("style2");
    disArea2.appendChild(newDiv2);

    

}