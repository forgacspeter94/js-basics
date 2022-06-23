console.log('hello world');

let x = 'valtozo vagyok'
//function loadEvent () {
 //   console.log('loaded');

  //  document.getElementById('root').innerHTML='Sziasztok!'
//}

//window.addEventListener('load',loadEvent)

console.log(x);

x = "En megvaltoztam"


const obj = {
    "kulcs" : "ertek",
    kulcs2 : 132,
    boolivan : true,
    kulcs4 : "123",
    tomb: ['lara croft','indiana jones'],
    obivan: {
        key : 'string',
        key2 : 951,
        key3 : ['luke', 'vegtelen']
            }
}

const arr = [
    'string',
    456,
    false,
    '798'
]

function countryComponent(country) {
    console.log(country)
    return
        <div class = 'country'  >
            ${countryComponent.name.common}
        </div>
}


async function loadEvent() {
    let root = document.getElementById ('root');
    root.insertAdjacentHTML('beforeend', `
        <h1>${arr}</h1>
    ` )
    for (let index = 0; index <= 10; index++) {
    console.log('The current value of index is: ',index);
    root.insertAdjacentHTML('beforeend', `
    <h1>${index}</h1> 
    ` )
    }

    const countries =await fetch('https://restcountries.com/v3.1/all');
    console.log(countries)

    const countriesJson = await countries.json();
    console.log(countriesJson);
    
    for (let index = 0; index <countriesJson.length; index++) {
        console.log(countriesJson[index].name.common);
        root.insertAdjacentHTML('beforeend',countryComponent(countriesJson[index]));
     
        }
}





window.addEventListener ('load', loadEvent);