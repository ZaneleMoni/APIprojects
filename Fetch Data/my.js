// const data = {title,price,description}
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((products) => {
        document.querySelector("#products").innerHTML += `
        <div class= "lists">
      <img src = ${products.image} alt="">
          <li>${products.title}</li>
          <li>${products.price}</li>
          <li>${products.description}</li>
          </div>
       `;
    });
  });
