function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deleteLetters() {
  let words = document.querySelector("#sentence").innerHTML;
  console.log(words);

  let char = words.split("");
  console.log(char);

  while (char.length > 0) {
    await waitForMs(300);
    char.pop();
    document.querySelector("#sentence").innerHTML = char.join("");
  }
}

async function writeLetters(letters) {
  let char = letters.split("");
  console.log(char);

  let i = 0;
  while (i < char.length) {
    await waitForMs(300);
      document.querySelector("#sentence").append(char[i]);
      i++;
  }
}
async function typingEffect() {
  await deleteLetters();
  await waitForMs(200);
  await writeLetters("I am tired");

  await deleteLetters();
  await waitForMs(300);
  await writeLetters("I am the girl");
}
typingEffect();
