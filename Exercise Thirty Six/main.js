const pickColor = document.querySelector("#colorPick");
const displayColor = document.querySelector("#previewColor");
const historyColor = document.querySelector("#historyColor");
const clearBtn = document.querySelector('#clearBtn');

pickColor.addEventListener("input", function () {
  const chosenColor = pickColor.value;
  displayColor.style.backgroundColor = chosenColor;
  const hexColor = chosenColor;
  // console.log("hexColor", hexColor);

  function history() {
    const historyDisplay = document.createElement("li");
    historyDisplay.textContent = hexColor;
    historyDisplay.style.color = hexColor;
    historyColor.appendChild(historyDisplay);
    clearBtn.addEventListener('click', function(){
        historyDisplay.textContent = ''
    })
  }
  history();
});
