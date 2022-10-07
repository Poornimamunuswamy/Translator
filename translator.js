const text = document.getElementById("inputText");
const btn = document.getElementById("btn");

btn.addEventListener("click", async function () {
  const data = await fetch(
    `https://api.funtranslations.com/translate/pirate.json?text=${text.value}`
  );
  const response = await data.json();
  document.getElementById("outputText").innerHTML = response.contents.translated;
});

