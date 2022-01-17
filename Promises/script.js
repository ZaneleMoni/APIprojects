let person = new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/?results=100")
        .then((res) => res.json())
        .then((data) => {
            let individual = data.results;

            let person = individual.find((person) => {
                return (
                    person.name.first == "Johnathan" ||
                    person.name.first == "Tom" ||
                    person.name.first == "Jack" ||
                    person.name.first == "John" ||
                    person.name.first == "Jake" ||
                    person.name.first == "Mary"
                );
            });

            if (person) {
                resolve(person);
            } else {
                reject({
                    message: "Person not found",
                });
            }
        });
    person
        .then((i) => {
            document.querySelector("#results").innerHTML = `
            <h1>${i.name.first} ${i.name.last}</h1>
           `;
        })
        .catch((error) => {
            alert(error.message);
            location.reload();
        });
});