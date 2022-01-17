let countries = JSON.parse(localStorage.getItem("countries")) ? JSON.parse(localStorage.getItem("countries")) : [];

// let countries = [

//     {
//         name: "Libya",
//         continent: "Africa",
//     },
//   {
//         name: "Chad",
//         continent:"Africa",
// },
//   {
//         name: "Nigeria",
//         continent:"Africa",
//   },
//   {
//         name: "Angola",
//         continent:"Africa",
//     },
//     {
//         name: "Mali",
//         continent:"Africa",
//     },
//     {
//         name: "South-Africa",
//         continent:"Africa",
//     },
//     {
//         name: "Ethiopia",
//         continent:"Africa",
//     },
//     {
//         name: "Algeria",
//         continent:"Africa",
//     },
//     {
//         name: "Sudan",
//         continent:"Africa",
//     },
//    {
//         name: "Kenya",
//         continent:"Africa",
//   },
// ];

//Read countries
function readCountries(countries) {
  document.querySelector("#countries").innerHTML = "";
  countries.forEach((country, i) => {
      document.querySelector("#countries").innerHTML += `
    
        <li>${country.name} is in  ${country.continent}
        <span>
    <button class="btn btn-danger" onclick="deleteCountry(${i})">Delete</button>
       <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${i}">Update</button>
     </span>
       </li>
        
     <div class="modal fade" id="update-modal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
       country <input type="text" id="update-input-${i}" value ="${country.name}"/>
<select name="continent" id="addContinent-${i}">
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="Australia">Australia</option>
            <option value="Europe">Europe</option>


        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" >Close</button>
        <button type="button" data-bs-dismiss="modal" onclick="updateCountry(${i})"${country.name}>Save changes</button>
      </div>
    </div>
  </div>
</div>  `;
  });
}
   

readCountries(countries);

//create
function createCountry() {
    let country = document.querySelector("#addCountry").value;
    let continent = document.querySelector("#addContinent").value;

  try {
    if (!country) throw new Error("Please type in a country");
      countries.push({
          name: country,
          continent,
      });
    localStorage.setItem("countries",JSON.stringify(countries));
    readCountries(countries);
  } catch (err) {
    alert(err);
  }
}
//delete
function deleteCountry(i) {
  let confirmation = confirm("Are you sure you want to delete this country?");
  if (confirmation) {
    countries.splice(i, 1);
    localStorage.setItem("countries", JSON.stringify(countries));
    readCountries(countries);
  }
}
  //update
  function updateCountry(i) {
    let country = document.querySelector(`#update-input-${i}`).value;
    let continent = document.querySelector(`#addContinent-${i}`).value;

    try {
      if (!country) throw new Error(`Please insert country name at ${i} before updating`);
      countries[i] = {
        name: country,
        continent,
      };
      localStorage.setItem("countries", JSON.stringify(countries));
      readCountries(countries);
    } catch (err) {
      alert(err);
    }
  }

