import { toggleMenu, links } from "./elements.js";

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  links.parentElement.classList.toggle("links-div");
  links.classList.toggle("active");
});
