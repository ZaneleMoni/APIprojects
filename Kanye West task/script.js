
async function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
function getQuote() {
    fetch("https://api.kanye.rest/")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#text").innerHTML = 
data.quote;
        
      });
}
async function loop() {
    while (true) {
        getQuote();
        await waitForMs(5000);
    }
}
    loop()