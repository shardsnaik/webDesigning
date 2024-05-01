const cityname = document.getElementById('cityname');
const m3one = document.getElementById('m3one');
const m3two = document.getElementById('m3two');
const mainbox2 = document.getElementById('mainbox2');

const searchbtn = document.getElementById('searchbtn');

const datahide = document.querySelector('.mainbox3');

const getdata = async(event) =>{
    event.preventDefault();
    let enteredval = cityname.value;
    console.log(enteredval)
  if(enteredval === ""){
      m3one.innerHTML= "enadru enter mado";
      datahide.classList.add('data_hide');
    }
    else{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?zip=${enteredval},IN&appid=3ee2d835f153a60307c4e2066dc0d83f`
            const responce = await fetch(url);
            const data = await responce.json();
            console.log(data)
            const arraydata = [data];
           let te =  arraydata[0].main.temp -273.15;
            let temperature = Math.trunc(te);
            console.log(temperature)
             m3one.innerText= `${temperature} °C`;
             m3two.innerText =arraydata[0].weather[0].main;
             
             mainbox2.innerText = `${enteredval},${arraydata[0].name}`;

            let changicon = arraydata[0].weather[0].main;
            if(changicon == "Clouds" ){
                m3two.innerHTML= "<i class='fa-solid fa-cloud fa-beat' style='color: #e6ebf5;'></i>";
            }else if(changicon == "Rain" ){
                m3two.innerHTML= "<i class='fa-solid fa-cloud-showers-heavy fa-beat'></i>";}
                else{
                    m3two.innerHTML ="<i class='fa-solid fa-droplet fa-bounce'></i>"
                }
 
// to write multiple value in single innerHTML ==>
// m3one.innerText= `${temperature} °C, ${arraydata[0].weather[0].main}`;

        } catch (error) {
            m3one.innerText= `enadru enter mado`
            datahide.classList.add('data_hide');
        }
    }
}
searchbtn.addEventListener('click',getdata);

// datahide.classList.remove('data_hide');
// also need to remove datahide when all things go good