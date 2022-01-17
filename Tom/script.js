fetch("https://randomuser.me/api/?results=100")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    let person = data.results.find((person) => {
      return person.name.first == "Tom";
    });
    if (person) {
      document.querySelector("#person").innerHTML = `
                    <h1> ${person.name.first} ${person.name.last} </h1>
                  `;
    } else {
      alert("Tom not found");
    }
  });

