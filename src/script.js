const adviceNumber = document.querySelector(".advice-number");
const textContainer = document.querySelector(".text");
const diceSymbol = document.querySelector(".dice-symbol");
function displayData(res) {
  const [id, advice] = [res.slip.id, res.slip.advice];
  adviceNumber.textContent = `#${id}`;
  textContainer.textContent = `"${advice}"`;
}
async function fetchAdvice() {
  const res = fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((res) => displayData(res));
}
diceSymbol.addEventListener("click", fetchAdvice);
fetchAdvice();
