fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        document.getElementById("cards").innerHTML += `
           <li><button onclick="getUser('${data.results[i].url}')">${data.results[i].name}</button></li>
    
      `;
    }
  });
// function getRandomuser(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       document.getElementById("display").innerHTML = `
//         <h1>${data.gender.name}</h1>
//         <img src="${large.medium.thumbnail}">
//       `;
//     });
// }