const raw='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(raw)
.then(result=> result.json())
.then(data=> cities.push(...data));

function findmatch(word,cities){
    return cities.filter(place=>{
        const regex=new RegExp(word,'gi');
        return place.city.match(regex) ||  place.state.match(regex)
    })
}


  
function display() {
const matchArray = findmatch(this.value, cities);
const html = matchArray.map(place => {
const regex = new RegExp(this.value, 'gi');
const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
return `
<li>
<span class="name">${cityName}, ${stateName}</span>
<span class="population">${place.population}</span>
</li>
`;
}).join('');
suggestion.innerHTML = html;
}

const search=document.querySelector('.search');
const suggestion=document.querySelector('.suggestions');

search.addEventListener('change',display);

search.addEventListener('keyup',display);


