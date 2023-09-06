import colors from "./colors.js";
import { main, h1, changeColorButton, currentColorText } from "./elements.js";

export function pickAndChangeBgColor() {
  const index = Math.floor(Math.random() * colors.length);
  const currentColor = colors[index];

  if (currentColor === "black") {
    h1.style.backgroundColor = "white";
    h1.style.color = "black";
    changeColorButton.style.color = "black";
    changeColorButton.style.backgroundColor = "white";
  } else {
    h1.style.backgroundColor = "black";
    h1.style.color = "white";
    changeColorButton.style.color = "black";
    changeColorButton.style.backgroundColor = "transparent";
  }

  main.style.backgroundColor = currentColor;
  currentColorText.innerText = currentColor;
}
