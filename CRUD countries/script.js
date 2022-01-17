let countries = [
    "Libya",
    "Chad",
    "Nigeria",
    "Angola",
    "Mali",
    "South-Africa",
    "Ethiopia",
    "Algeria",
    "Sudan",
    "Kenya"
];
//Read countries
function readCountries(countries) {
    document.querySelector("#countries").innerHTML = ""; 
    countries.forEach((country, i) => {
        document.querySelector("#countries").innerHTML += `
        <li>${country}
    <button onclick="deleteCountry(${i})" ${country}>Delete</button>
       <button onclick="updateCountry(${i})" ${country}>Update</button>
       </li>
`;
    });
};
readCountries(countries);
    


//create
function createCountry() {
    let country = document.querySelector("#input").value
    try {
        if (!country) throw new Error("Please type in a country");
        countries.push(country);
        readCountries(countries);
    }
    catch (err) {
        
        alert(err);
    }
}
//delete
function deleteCountry(i) {
    countries.splice(i,1);
    readCountries(countries);
};

//update
function updateCountry(i) {
    let country = prompt("Please input country");
    try {
        if (!country) throw new Error("No country to add");
    countries[position] = country;
        readCountries(countries);
    }
    catch (err) {
        alert(err);
    }
};