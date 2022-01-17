// declaration
let users = new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/?results=100")
        .then((res) => res.json())
            .then((data) => {
                resolve(data.results);
            })
            .catch((err) => reject(err));
});
// function that searches for a user
users.then((data) => {
    showUsers(data);
});
function showUsers(data) {
    document.querySelector("#users").innerHTML = "";
   //lopping over an array
    data.forEach((user) => {
        document.querySelector("#users").innerHTML += `
       <div>
       <h3>${user.name.first} ${user.name.last}</h3>
       </div>
        `;
    });
}
    //Function that searches for users
function searchUsers() {
    users.then((data) => {
        let searchTerm = document.querySelector("#search").value.toLowerCase();
        const foundUsers = data.filter((user) => {
            return user.name.first.toLowerCase().includes(searchTerm);

        });
        // call the function
        showUsers(foundUsers);
    });
}