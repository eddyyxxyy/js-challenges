import { counterDisplay, controls } from "../elements.js";

export default class Counter {
  counterState = {
    initial: undefined,
    value: undefined,
    end: undefined,
  };

  constructor(initial) {
    this.counterState = { ...this.counterState, initial, value: initial };
    this.assignButtonFunctions();
    this.loadLastInteraction();
    this.updateCounter();
  }

  assignButtonFunctions() {
    controls.addEventListener("click", (event) => {
      switch (event.target.id) {
        case "reset":
          this.counterState = {
            ...this.counterState,
            value: this.counterState.initial,
          };
          this.updateCounter();
          break;
        case "increase":
          this.counterState = {
            ...this.counterState,
            value: this.counterState.value + 1,
          };
          this.updateCounter();
          break;
        case "decrease":
          this.counterState = {
            ...this.counterState,
            value: this.counterState.value - 1,
          };
          this.updateCounter();
          break;
        default:
          break;
      }
      this.saveInteraction();
    });
  }

  changeDisplayIfLastInteraction() {
    if (this.counterState.end) {
      this.counterState = {
        ...this.counterState,
        initial: this.counterState.end,
      };
    }
  }

  loadLastInteraction() {
    try {
      const { end } = JSON.parse(window.localStorage.getItem("@counter:"));
      this.counterState = { ...this.counterState, value: end };
    } catch (error) {}
    if (this.counterState.end) {
      this.changeDisplayIfLastInteraction();
    }
  }

  saveInteraction() {
    this.counterState.end = this.counterState.value;
    window.localStorage.setItem(
      "@counter:",
      JSON.stringify({ end: this.counterState.end })
    );
  }

  updateCounter() {
    counterDisplay.innerText = this.counterState.value;
  }
}
